import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const PromotingCareer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="md:flex justify-center px-5 lg:px-28 gap-12 lg:py-10  py-4 bg-blue-50">
      <div className="w-full justify-center items-center lg:mt-20 md:w-1/2 space-y-9 py-4">
        <h1 className="lg:text-5xl text-3xl font-bold">Promoting Career</h1>
        <p>
          There are many variations of passages of Lorem <br /> Ipsum Fasts
          There are many variations of passages <br /> of Lorem Ipsum Fastsby
          injected humour fasts there
        </p>

        <Link to="jobsroute">
          <button className="banner py-2 px-8 rounded-md text-white text-lg mt-5">
            Browse Job
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Tabs>
          <div className="flex gap-2 justify-center mt-6">
            <hr className=" border-[1px] w-full mt-8"></hr>
            <TabList className="flex gap-2">
              <Tab
                className={`py-2 px-4 border-2 text-white rounded-lg border-transparent banner cursor-pointer ${
                  activeTab === 0
                    ? "banner text-white"
                    : "hover:border-blue-600"
                }`}
                onClick={() => tabClickHandler(0)}
              >
                Step One
              </Tab>
              <Tab
                className={`py-2 px-4 border-2 rounded-lg  border-transparent banner text-white cursor-pointer ${
                  activeTab === 1
                    ? "banner text-white"
                    : "hover:border-blue-600"
                }`}
                onClick={() => tabClickHandler(1)}
              >
                Step Two
              </Tab>
              <Tab
                className={`py-2 px-4 border-2 text-white rounded-lg border-transparent banner cursor-pointer ${
                  activeTab === 2
                    ? "banner text-white"
                    : "hover:border-blue-600"
                }`}
                onClick={() => tabClickHandler(2)}
              >
                Step Three
              </Tab>
            </TabList>
            <hr className=" border-[1px] w-full mt-8"></hr>
          </div>

          <div className="mt-9">
            <TabPanel>
              <div className="relative rounded-xl bg-white lg:px-10 px-3 py-6 lg:py-20 h-full shadow-sm text-center">
                <button className="bg-white -top-5 left-[45%]  py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  1
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/PMsYbX6/step-1.png"
                    alt="images"
                    className="mx-auto lg:h-24 lg:w-20"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Set Up Your Profile All
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    After signing up to TechCareer, you start to set up your
                    profile and find the hottest & latest tech jobs.
                  </p>
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative rounded-xl bg-white lg:px-10 px-3 py-6 lg:py-20 shadow-sm text-center">
                <button className="bg-white -top-5 left-[45%]  py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  2
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/TWZn8Vd/step-2.png"
                    alt="images"
                    className="mx-auto lg:h-24 lg:w-20"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Create A Pro CV
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    Techcareer gives you more than 500 pre-made CV samples for
                    candidates to personalize their CVs.
                  </p>
                </a>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative rounded-xl bg-white lg:px-10 px-3 py-6 lg:py-20 shadow-sm text-center">
                <button className="bg-white -top-5 left-[45%]  py3 px-4  border text-lg border-gray-700 absolute btn-circle">
                  3
                </button>
                <a href="/templates" className="group">
                  <img
                    src="https://i.ibb.co/5R7bq8h/step-3.png"
                    alt="images"
                    className="mx-auto lg:h-24 lg:w-20"
                  />
                  <h3 className="my-3 text-2xl font-bold group-hover:text-primary-500">
                    Get Applied
                  </h3>
                  <p className="mt-1.5 text-lg leading-6 text-secondary-500">
                    When owning a CV, don't hesitate to submit your CV to easily
                    apply for a job from Tech companies.
                  </p>
                </a>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PromotingCareer;
