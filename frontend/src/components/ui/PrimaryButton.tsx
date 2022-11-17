const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="inline-flex text-white bg-gradient-to-r from-primary-100 to-primary-50 border-0 py-2 px-6 focus:outline-none rounded text-lg">
      {children}
    </button>
  );
};

export default PrimaryButton;
