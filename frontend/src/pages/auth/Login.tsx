import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../../context/AuthContext";
import GoogleLogin from "../../components/login/GoogleLogin";
import SpinLoader from "../../components/loaders/SpinLoader";
import useDocTitle from "../../hooks/useDocTitle";
import axios from "axios";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please Enter your Email" })
    .email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Should be minimum 8 char long" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  useDocTitle("Login");
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    const { email, password } = data;
    setLoading(true);
    authContext
      ?.signIn(email, password)
      .then(({ user }) => {
        // Get jwt token
        axios
          .post("https://ultimate-fit-backend.vercel.app/api/jwt", {
            email: user.email,
          })
          .then(({ data }) => {
            localStorage.setItem("service-token", data.token);

            setLoading(false);
            reset();
            toast.success("Login successful");
            navigate(from, { replace: true });
          });
      })
      .catch((err: any) => {
        if (err.message == "Firebase: Error (auth/user-not-found).") {
          setLoading(false);
          toast.error("User not found, please register first");
        } else if (err.message == "Firebase: Error (auth/wrong-password).") {
          setLoading(false);
          toast.error("Wrong email or password");
        } else {
          setLoading(false);
          toast.error("Something went wrong, try again later");
        }
      });
    // .finally(() => {
    //   // authContext.setLoading(false);
    // });
  };

  return (
    <div>
      <div className="mx-auto my-10 w-full max-w-md rounded-md bg-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 sm:p-8">
        <h2 className="mb-5 text-center text-3xl font-semibold">Login</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="leroy@jenkins.com"
                className="input-form"
              />
              {errors.email?.message && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                {...register("password")}
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
            {loading ? <SpinLoader /> : "login"}
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
          Not a member?{" "}
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
