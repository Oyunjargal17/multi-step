export const Success = () => {
  return (
    <div className="bg-[#f4f4f4] h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-100 h-fit bg-white rounded-sm mt-4">
          <img className="w-10 h-10 mt-8 ml-8" src="/logo.png" alt="logo" />
          <h1 className="font-bold ml-8 mt-4">You're All Set 🔥</h1>
          <p className="text-sm ml-8 text-[#8e8e8e] mb-10">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
