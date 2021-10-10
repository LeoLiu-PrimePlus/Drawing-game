import "./style.scss";
import { selectNotifyMsg } from "../../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { notifyMessage } from "../../../store/actions";
import { useEffect } from "react";

const Notify = () => {
  const notifyMsg = useSelector(selectNotifyMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeNotify = setTimeout(() => {
      const notifyObj = {
        msg: "",
        type: "",
      };
      dispatch(notifyMessage(notifyObj));
    }, 3000);
    return () => {
      clearTimeout(closeNotify);
    };
  }, [dispatch, notifyMsg]);

  return (
    <div
      className={`notify text-white fs-6 border-m ${
        notifyMsg.type === "error" ? "bg-danger" : "bg-success"
      } ${notifyMsg.msg !== "" ? "notify-show notify-slide" : ""}`}
    >
      {notifyMsg.msg}
    </div>
  );
};

export default Notify;
