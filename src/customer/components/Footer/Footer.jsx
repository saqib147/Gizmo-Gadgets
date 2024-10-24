import React from "react";
import bg from "./Assets/footer-bg.png";

function Footer() {
  return (
    <footer className="p-8">
      <div
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" p-8 w-full items-center grid grid-cols-5 grid-rows-5 gap-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-3xl">Gadget Gizmo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                architecto facere maiores eaque labore cumque quia saepe
                adipisci unde odit.
              </p>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
