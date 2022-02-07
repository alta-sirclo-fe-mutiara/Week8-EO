import Image from "next/image";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  const handleHomepage = () => {
    router.push("/");
  };
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-11 col-md-8 col-lg-6 mt-5">
          <div className="text-center row shadow rounded-3 pt-3 mt-5 pb-5">
            <div className="col-5 mt-5">
              {/* Break dynamic route */}
              {/* <Image
                src="/image/1.png"
                alt="not-found image"
                layout="responsive"
                width={70}
                height={70}
              /> */}
            </div>
            <div className="col-7">
              <h1 className="mt-3">Ooops . . . </h1>
              <h1 className="fw-bold">You are not login!</h1>
              <div
                className="row justify-content-center mt-4"
                onClick={handleHomepage}
              >
                we send you to Home Page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
