import { useNavigate } from "react-router-dom";

export default function MockApiDashboardPage() {
  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen p-9">
      <section className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div>
            <button
              className=" text-ak-yellow-dark underline"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign out
            </button>
          </div>
          <div className="mb-10">
            <img
              src="/images/hero.png"
              alt="hero banner"
              width={305}
              height={305}
            />
          </div>
          <div className="text-center mb-24">
            <h1 className="font-semibold text-xl text-black mb-2">
              Welcome to AdmitKard
            </h1>
            <p className="text-base text-ak-gray-light">
              In order to provide you with a custom experience,<br></br>
              <span className=" font-medium text-base text-ak-gray-dark">
                we need to ask you a few questions.
              </span>
            </p>
          </div>
          <div className="justify-self-end h-fit">
            <button className=" bg-ak-yellow-dark p-1 text-white rounded-full w-[224px] h-[36px] mb-2">
              Get Started
            </button>
            <p className="text-[12px] text-ak-gray-light text-center">
              *This will only take 5 min.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
