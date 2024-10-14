import StudentCard from "./StudentCards";

const StudentList = () => {
  const cardDisplay = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
    height: "100vh",
    margin: "auto",
    backgroundColor: "green",
  };

  const studentData = [
    {
      name: "Aung Min Htut",
      profile:
        "https://yt3.ggpht.com/yti/ANjgQV8DuRhh1lTITbCVC6iqwb3O2DY4DEUuGEfUgeORqYwo3vg=s88-c-k-c0x00ffffff-no-rj",
      major: "Computer Science",
      grade: "A+",
    },
    {
      name: "Bob Smith",
      profile:
        "https://yt3.ggpht.com/yti/ANjgQV8DuRhh1lTITbCVC6iqwb3O2DY4DEUuGEfUgeORqYwo3vg=s88-c-k-c0x00ffffff-no-rj",
      major: "Physics",
      grade: "B+",
    },
    {
      name: "Charlie Brown",
      profile:
        "https://yt3.ggpht.com/yti/ANjgQV8DuRhh1lTITbCVC6iqwb3O2DY4DEUuGEfUgeORqYwo3vg=s88-c-k-c0x00ffffff-no-rj",
      major: "Maths",
      grade: "A",
    },
  ];
  return (
    <>
      <h1
        style={{
          width: "80%",
          backgroundColor: "purple",
          margin: "auto",
          padding: "20px",
        }}
      >
        Student List
      </h1>
      <div style={cardDisplay}>
        {studentData.map((st, index) => (
          <StudentCard
            key={index}
            name={st.name}
            profile={st.profile}
            major={st.major}
            grade={st.grade}
          />
        ))}
      </div>
    </>
  );
};

export default StudentList;
