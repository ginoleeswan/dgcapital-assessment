import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const [peopleList, setPeopleList] = useState([]);

  const getPeople = async () => {
    let res = await axios.get("http://localhost:3001/people");
    let data = res.data;

    setPeopleList(data);
  };

  const findMonth = (dateString) => {
    var birthDate = new Date(dateString);
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[birthDate.getMonth()];

    return n;
  };

  const listOfBirthMonths = peopleList.map((person) =>
    findMonth(person.birthdate)
  );

  const numOfJan = listOfBirthMonths.filter((x) => x === "January").length;
  const numOfFeb = listOfBirthMonths.filter((x) => x === "February").length;
  const numOfMar = listOfBirthMonths.filter((x) => x === "March").length;
  const numOfApr = listOfBirthMonths.filter((x) => x === "April").length;
  const numOfMay = listOfBirthMonths.filter((x) => x === "May").length;
  const numOfJun = listOfBirthMonths.filter((x) => x === "June").length;
  const numOfJul = listOfBirthMonths.filter((x) => x === "July").length;
  const numOfAug = listOfBirthMonths.filter((x) => x === "August").length;
  const numOfSep = listOfBirthMonths.filter((x) => x === "September").length;
  const numOfOct = listOfBirthMonths.filter((x) => x === "October").length;
  const numOfNov = listOfBirthMonths.filter((x) => x === "November").length;
  const numOfDec = listOfBirthMonths.filter((x) => x === "December").length;

  const data = [
    {
      month: "Jan",
      amount: numOfJan,
    },
    {
      month: "Feb",
      amount: numOfFeb,
    },
    {
      month: "Mar",
      amount: numOfMar,
    },
    {
      month: "Apr",
      amount: numOfApr,
    },
    {
      month: "May",
      amount: numOfMay,
    },
    {
      month: "Jun",
      amount: numOfJun,
    },
    {
      month: "July",
      amount: numOfJul,
    },
    {
      month: "Aug",
      amount: numOfAug,
    },
    {
      month: "Sep",
      amount: numOfSep,
    },
    {
      month: "Oct",
      amount: numOfOct,
    },
    {
      month: "Nov",
      amount: numOfNov,
    },
    {
      month: "Dec",
      amount: numOfDec,
    },
  ];

  useEffect(() => {
    getPeople();
  }, []);
  return (
    <Container style={{ marginTop: 20 }} className="vh-100">
      <Row className="justify-content-center">
        <h3 style={{ marginBottom: 20, textAlign: "center" }}>
          Number of people born in each month of Year
        </h3>
      </Row>

      <Row className="h-100 justify-content-center">
        <ResponsiveContainer width="80%" height="80%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 30,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              label={{
                value: "Pages",
                position: "insideBottomMiddle",
                dy: 30,
              }}
            />
            <YAxis
              type="number"
              domain={[0, (dataMax) => dataMax * 2]}
              allowDecimals={false}
              label={{
                value: "Number",
                position: "insideLeft",
                angle: -90,
                dy: -10,
              }}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Row>

      {/* <Row>
        {peopleList.map((person) => (
          <>
            <div>{findMonth(person.birthdate)}</div>
            <div>{person.birthdate}</div>
          </>
        ))}
      </Row> */}
    </Container>
  );
};

export default Home;
