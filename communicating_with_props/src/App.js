import React from "react";
import CommentDetail from "./Components/CommentDetail";
import ApprovalCard from "./Components/ApprovalCard";
function App() {
  const style = {
    margin: "50px",
  };
  return (
    <div style={style}>
      <ApprovalCard>
        <CommentDetail
          userName="Dev"
          createdAt="5:00"
          message="Hello There"
          image="/img/user-1.jpg"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          userName="Gulsan"
          createdAt="20:01"
          message="Nice Post!!"
          image="/img/user-2.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          userName="Anjali"
          createdAt="4:05"
          message="I loved it"
          image="/img/user-3.jpg"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
