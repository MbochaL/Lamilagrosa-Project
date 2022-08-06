import { useState, useContext, useEffect } from "react";
import moment from "moment";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Home = (props) => {
  const [commentItem, setCommentItem] = useState("");
  const [comments, setItems] = useState([]);
  const { userGlobal, islogged } = useContext(UsuarioContext);

  useEffect(() => {
    const mensajes = JSON.parse(localStorage.getItem("LMG-coments")) ?? [];
    comments = mensajes;
    setItems(mensajes);
  }, []);

  useEffect(() => {
    localStorage.setItem("LMG-coments", JSON.stringify(comments));
  }, [comments]);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAddComment();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAddComment();
  };
  const handleAddComment = () => {
    if (commentItem) {
      setItems([
        {
          id: uuidv4(),
          message: commentItem,
        },
        ...comments,
      ]);

      setCommentItem("");
    }
  };

  const handleDelete = (id) => {
    const _items = comments.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setItems(_items);
  };

  return (
    <div className="min-w-screen min-h-screen bg-white p-10 py-12 my-20">
      <div className=" flex items-center justify-end">
        <div className="container flex lg:flex-row flex-col lg:space-x-24">
          <div className="relative">
            <div className="w-full flex justify-center">
              <svg
                width="410"
                height="458"
                viewBox="0 0 410 458"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="410" height="458" rx="20" fill="#306bac" />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="410"
                  height="458"
                >
                  <rect width="410" height="458" rx="20" fill="#306bac" />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M222.937 499C211.926 460.075 233.668 414.133 277.075 392.973C316.718 373.648 331.336 325.714 332.752 264.241C333.132 247.753 335.846 230.255 338.97 213.361C340.17 206.867 341.412 200.55 342.628 194.371C344.657 184.051 346.611 174.114 348.171 164.378C350.647 148.921 351.8 135.72 350.603 125.195C349.423 114.825 346.172 108.676 341.278 105.001C334.817 100.15 323.087 95.7083 306.522 91.5679C290.943 87.6739 272.768 84.421 253.703 81.0089L253.702 81.0087L251.505 80.6153C231.866 77.0989 211.421 73.3918 193.146 68.6874C175.091 64.0396 157.855 58.1123 145.241 49.5827C109.414 25.3569 82.7148 -2.66498 70.8048 -41L97.1896 -41C107.98 -13.1631 129.062 8.60177 159.223 28.9962C168.15 35.0324 181.934 40.1183 199.373 44.6074C216.591 49.04 236.113 52.5936 255.907 56.1379C256.765 56.2916 257.624 56.4452 258.483 56.5989C277.217 59.951 296.151 63.339 312.578 67.4448C329.37 71.642 345.457 77.0149 356.264 85.1307C368.638 94.4225 373.754 108.213 375.367 122.39C376.963 136.411 375.335 152.364 372.782 168.303C371.166 178.389 369.047 189.178 366.948 199.865L366.948 199.867C365.753 205.951 364.565 212.003 363.479 217.873C360.406 234.495 358.001 250.392 357.669 264.812C356.237 326.971 341.658 389.168 288.016 415.317C250.274 433.715 237.687 472.301 249.457 499H222.937Z"
                    fill="#5c95ff"
                  />
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M208.122 145.56C206.345 146.208 203.081 146.797 197.951 146.905C192.984 147.009 187.005 146.654 180.221 145.908C166.645 144.417 150.807 141.474 135.092 138.22C127.689 136.686 119.805 134.971 112.324 133.343L112.318 133.342C104.778 131.702 97.6474 130.15 91.8285 128.964C85.6983 127.714 80.0892 126.665 75.503 126.04C73.2137 125.728 70.9728 125.492 68.9318 125.412C67.1375 125.343 64.4857 125.338 61.8639 126.019C54.0112 128.056 47.4988 133.351 42.9636 139.247C38.3449 145.252 34.9456 152.926 34.1672 161.179C33.3709 169.621 35.3474 178.759 41.6414 186.626C47.8499 194.387 57.3416 199.778 69.5527 202.719C85.3845 206.532 94.5417 213.057 100.543 220.989C106.824 229.289 110.557 240.309 113.281 254.748C116.153 269.967 120.94 293.331 129.444 315.85C137.796 337.966 150.535 361.497 170.65 374.735C190.586 387.855 211.754 389.521 229.936 380.568C247.568 371.885 260.329 354.248 266.722 332.717C269.972 321.774 273.675 308.553 277.552 294.712C280.466 284.309 283.478 273.557 286.468 263.16C293.572 238.465 300.599 215.609 306.511 201.453L306.788 200.789L306.987 200.096C311.875 183.075 311.369 168.281 304.119 156.767C296.906 145.312 284.894 140.093 273.498 137.956C251.148 133.765 223.658 139.888 208.122 145.56ZM62.7353 154.388C64.62 151.938 66.4905 150.717 67.6421 150.253C67.7328 150.254 67.8389 150.257 67.9614 150.262C68.8867 150.298 70.2529 150.423 72.1291 150.679C75.8738 151.19 80.8294 152.103 86.8382 153.328C93.1401 154.614 99.7108 156.047 106.779 157.59C113.939 159.152 121.608 160.826 130.027 162.569C145.913 165.859 162.697 169.002 177.493 170.627C184.896 171.441 192.04 171.903 198.475 171.768C204.748 171.636 211.164 170.93 216.685 168.914C230.346 163.927 252.881 159.393 268.895 162.396C276.682 163.856 280.937 166.697 283.015 169.997C285.021 173.183 286.803 179.673 283.213 192.59C276.735 208.292 269.457 232.154 262.512 256.3C259.399 267.124 256.357 277.985 253.446 288.382L253.445 288.384C249.64 301.975 246.056 314.772 242.826 325.652C237.826 342.489 228.689 353.45 218.906 358.267C209.671 362.815 197.906 362.882 184.373 353.975C171.018 345.187 160.615 327.863 152.767 307.081C145.071 286.702 140.6 265.125 137.775 250.147C134.802 234.389 130.173 218.875 120.434 206.004C110.416 192.764 95.8955 183.481 75.4007 178.544C66.9609 176.512 62.9673 173.421 61.1201 171.112C59.3585 168.91 58.7092 166.39 58.981 163.509C59.2707 160.437 60.6336 157.12 62.7353 154.388Z"
                    fill="#5c95ff"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 flex h-full w-full flex-col items-center justify-center space-y-8">
              <div className="relative bg-white border-2 shadow-2xl shadow-slate-800 border-blue-700 rounded-xl px-6 py-6 w-27rem sm:ml-24">
                <div className="flex sm:flex-row space-x-4">
                  <img
                    className="w-16 h-16 rounded-full sm:top-0 "
                    src="https://i.insider.com/571749af52bcd01f7b8bd795?width=870&format=jpeg"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold italic ">Carlos García</h1>
                    <p className="text-red-800 font-serif text-sm border-b">
                      Critico Gastronomico
                    </p>
                    <p className="font-semibold text-sm pt-2">
                      Admirable el trabajo de La MilaGrosa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white rounded-xl border-2 shadow-2xl shadow-slate-800  border-blue-700 px-6 py-6 w-27rem sm:mr-24">
                <div className="flex sm:flex-row space-x-4">
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold italic ">Pedro Marquéz</h1>
                    <p className="text-red-800 font-serif text-sm border-b">
                      Critico Gastronomico
                    </p>
                    <p className="font-semibold text-sm pt-2">
                      La MilaGrosa cuenta con el mejor servicio.
                    </p>
                  </div>
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://content.api.news/v3/images/bin/e85314a4816ccd80e11f060c8f417182?width=650"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-left py-12 px-6">
            <h1 className="text-left uppercase tracking-widest font-serif text-slate-700">
              Testimonios
            </h1>
            <p className="mt-8 text-3xl xl:text-5xl text-slate-700 font-bold sm:text-center">
              Somos leales a nuestros clientes
            </p>
            <p className="mt-8 text-lg font-semibold text-gray-700">
              Explora nuestra App y obtén una experiencia única.
            </p>
            <div className="mt-8 flex">
              <Link href="/">
                <button className="bg-blue-500 px-8 py-2 rounded-lg shadow-xl text-white hover:ring-2 hover:ring-blue-900 hover:text-blue-900 hover:bg-white ">
                  Explorar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-xl sm:my-10 font-bold text-red-900 flex items-start border-b border-gray-600 pb-4">
        Dejanos tu reseña:
      </h1>
      <form className="pb-16">
        <div className="bg-white ring-1 ring-blue-700 rounded-xl shadow-lg w-full flex flex-col m-auto p-8">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea
              value={commentItem}
              onChange={(e) => setCommentItem(e.target.value)}
              onKeyDown={handleEnter}
              className="p-4 outline-none w-full rounded-xl h-40 ring-1 ring-sky-300 bg-gray-100 text-gray-700"
              name="comment"
              placeholder="Deja un comentario..."
            />
          </div>
          <div className="mt-8">
            <button
              onClick={handleClick}
              className="transition duration-500 ease flex items-start  hover:bg-white hover:text-blue-700 bg-blue-700 hover:border-2 hover:border-blue-500 text-sm font-semibold rounded-full text-white px-8 py-3 shadow-sm shadow-blue-800"
            >
              Comentar
            </button>
          </div>
        </div>
      </form>
      <h2 className="text-xl flex items-start text-red-900 font-bold border-b border-gray-600 pt-8 pb-4">
        Comentarios:
      </h2>
      <div className="pt-4 mt-6">
        <div className="mx-auto flex flex-col justify-items-start p-2">
          {comments
            .filter(({ done }) => !done)
            .map(({ id, message }) => (
              <div
                key={id}
                className=" text-red-900 flex flex-col items-start rounded-xl my-2 ring-1 ring-blue-800 p-4"
              >
                <div className="pb-2 mb-3 mx-auto w-full flex justify-between  border-b">
                  <div className="text-md flex p-auto font-bold text-blue-900 text-start">
                    <FaUser className="mr-2 ring-1 ring-blue-800 rounded-full" />
                    <div>
                      <span className="pr-4">{userGlobal.user}</span>
                      {"-"}
                      <span className="text-red-800 px-4">
                        {moment(comments.createdAt)
                          .subtract(10, "days")
                          .calendar()}
                      </span>
                    </div>
                  </div>
                  <FaTrashAlt
                    className="text-red-700 self-end cursor-pointer"
                    key={id}
                    onClick={() => handleDelete(id)}
                  />
                </div>
                <div>{message}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
