import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./Loading";

function User({ user, singleUser, repos,loading }) {
  const { username } = useParams();
  const {
    name,
    avatar_url,
    bio,
    hireable,
    following,
    followers,
    company,
    location,
    blog,
  } = user;
  useEffect(() => {
    singleUser(username);
  }, []);

  return (
    <>
    {loading&&<Loading/>}
    <div className="flex flex-col lg:flex-row lg:justify-center p-5">
      <div className="lg:w-1/3 lg:mr-4 mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold">{name}</h2>
        <img
          src={avatar_url}
          className="w-full max-w-md mx-auto"
          alt="profilepic"
        />
        <h3 className="text-xl font-bold">Bio</h3>
        <p className="text-lg">{bio}</p>
        <h3 className="text-xl font-bold">Open for Hiring</h3>
        <p className="text-lg">{hireable ? "✅" : "❌"}</p>
        <a
          href={`https://github.com/${username}`}
          className="block text-blue-500 hover:underline mt-2"
        >
          Go to GitHub Profile
        </a>
        <div className="bg-gray-100 rounded-md px-2 py-1 mt-2">
          <span className="font-bold">Followers : {followers}</span>
        </div>
        <div className="bg-gray-100 rounded-md px-2 py-1 mt-2">
          <span className="font-bold">Following : {following}</span>
        </div>

        <div className="bg-gray-100 rounded-md px-2 py-1 mt-2">
          <span className="font-bold">Company : {company}</span>
        </div>

        {location && (
          <div className="bg-gray-100 rounded-md px-2 py-1 mt-2">
            <span className="font-bold">Location : {location}</span>
          </div>
        )}

        {blog && (
          <div className="bg-gray-100 rounded-md px-2 py-1 mt-2">
            <span className="font-bold">Website : {blog}</span>
          </div>
        )}
      </div>

      <div className="lg:w-2/3">
        <Link to="/" className="text-2xl font-bold">
          Go Back
        </Link>
        <center>
          {repos ? (
            <>
              {repos.map((ele, index) => (
                <div key={index}>
                  <div className="bg-gray-100 rounded-md px-4 py-2 mt-4">
                    <a
                      href={ele.html_url}
                      target="_blank"
                      className="block text-blue-500 hover:underline"
                    >
                      <h2 className="text-xl font-bold">{ele.name}</h2>
                    </a>
                    <p className="text-lg">{ele.description}</p>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </center>
      </div>
    </div>
    </>
  );
}

export default User;
