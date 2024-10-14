import { studentContainer } from "./StudentCard.module.css";
import { studentImage } from "./StudentCard.module.css";

const StudentCard = ({ profile, name, major, grade }) => {
  return (
    <div>
      <div className={studentContainer}>
        <div className="student-profile">
          <img className={studentImage} src={profile} alt="" />
        </div>
        <div className="student-content">
          <h1 style={{ fontSize: "20px" }}>{name}</h1>
          <p>{major}</p>
        </div>
        <div className="student-grade">
          <p>{grade}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
