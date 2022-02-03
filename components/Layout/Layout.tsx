import { useState } from "react";
import { ChildProps } from "../../types/type";
import ModalLogin from "../Modal/ModalLogin";
import ModalRegister from "../Modal/ModalRegister";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout: React.FC<ChildProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showModalLog, setShowModalLog] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ModalLogin
        showLog={showModalLog}
        onSetLog={setShowModalLog}
        onSetReg={setShowModalReg}
      />
      <ModalRegister
        showReg={showModalReg}
        onSetLog={setShowModalLog}
        onSetReg={setShowModalReg}
      />
      <div>
        <NavBar onClick={setShowModalLog} />
        <div className="container-sm my-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
