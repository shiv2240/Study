import { useState, useEffect } from "react";

function Homepage() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [sortData, setSortData] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data1 = await res.json();
        setData(data1);
      } catch (err) {
        console.log("Unable to fetch data", err);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(term.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const name1 = a.name.toLowerCase();
    const name2 = b.name.toLowerCase();

    if (sortData === "asc") {
      return name1 > name2 ? 1 : -1;
    } else if (sortData === "desc") {
      return name1 < name2 ? 1 : -1;
    }
    return 0;
  });

  return (
    <>
      <h1>Users</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <div>
            <select
              value={sortData}
              onChange={(e) => setSortData(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <ul style={{ padding: 0, width: "100%", maxWidth: "600px" }}>
          {sortedData.map((user) => (
            <li
              key={user.id}
              style={{
                width: "100%",
                listStyle: "none",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 8px rgb(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.address.suite}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Homepage;
