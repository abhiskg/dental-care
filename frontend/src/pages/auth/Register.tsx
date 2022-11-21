import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { User } from "firebase/auth";
import GoogleLogin from "../../components/login/GoogleLogin";

import SpinLoader from "../../components/loaders/SpinLoader";
import useDocTitle from "../../hooks/useDocTitle";
import axios from "axios";
import { async } from "@firebase/util";
import { loadUserToDatabase } from "../../utils/manageUserDb";
import { getAccessToken } from "../../utils/manageAccessToken";

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Please Enter your name" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const Register = () => {
  useDocTitle("Register");
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    setLoading(true);
    const { name, email, password } = data;
    authContext
      ?.createNewUser(email, password)
      .then(({ user }) => {
        if (user) {
          handleUpdateUserInfo(name, user, email);
        }
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
          setLoading(false);
          toast.error("Email already registered, try Login!");
        } else {
          setLoading(false);
          toast.error("Register unsuccessful, try again!");
          console.log(err.message);
        }
      });
  };

  const handleUpdateUserInfo = (name: string, user: User, email: string) => {
    authContext
      ?.updateUser(name, user)
      .then(() => {
        loadUserToDatabase(name, email)
          .then((res) => res.json())
          .then(({ success, token, data }) => {
            if (success && token) {
              localStorage.setItem("dental-care-token", token);
            } else if (success && data) {
              getAccessToken(data.email as string)
                .then((res) => res.json())
                .then(({ success, token }) => {
                  if (success && token) {
                    localStorage.setItem("dental-care-token", token);
                  }
                });
            }
            setLoading(false);
            reset();
            toast.success("Congratulation! Registration Successful");
          });
      })
      .finally(() => {
        authContext.setLoading(false);
      });
  };

  return (
    <div>
      <div className="mx-auto my-10 w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Register</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                disabled={loading}
                placeholder="Enter your full name"
                className="input-form"
              />
              {errors.name?.message && (
                <p className="error-message">{errors.name?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                disabled={loading}
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                disabled={loading}
                id="password"
                placeholder="*****"
                className="input-form"
              />
              {errors.password?.message && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`auth-button grid place-items-center ${
              loading && "cursor-not-allowed"
            }`}
          >
            {loading ? <SpinLoader /> : "Register"}
          </button>
        </form>
        <div className="my-4 flex w-full items-center">
          <hr className="w-full dark:text-gray-400" />
          <p className="w-full px-3 text-center dark:text-gray-400">
            or login with
          </p>
          <hr className="w-full dark:text-gray-400" />
        </div>

        <div className="my-6 flex gap-3">
          <GoogleLogin />
        </div>

        <p className="text-center text-sm dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
