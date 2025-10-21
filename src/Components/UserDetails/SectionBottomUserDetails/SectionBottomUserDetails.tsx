import { useState } from "react";
import {
  Container,
  TabInfo,
  AreaButton,
  Button,
  Fields,
  BorderHighlight,
} from "./SectionBottomUserDetailsStyle";
import { useQuery } from "@tanstack/react-query";
import getData from "../../../service/api";
import { useParams } from "react-router-dom";
import formatDate from "../../../utils/utilts";
import Loading from "../../Loading/Loading";

const SectionBottomUserDetails = () => {
  const [nameBtn, setNameBtn] = useState("info");
  const { name } = useParams();


  const { data, isLoading } = useQuery({
    queryKey: ["dataPeople"],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });

  const findUser = data?.results.find((e) => e.name.first === name);

  function handleClickButton(name: string) {
    setNameBtn(name);
  }
  return (
    <Container
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <TabInfo>
          <AreaButton>
            <Button
              id="info"
              $nameBtn={nameBtn}
              onClick={() => handleClickButton("info")}
            >
              Info
              {nameBtn === "info" && <BorderHighlight layoutId="border" />}
            </Button>
            <Button
              id="location"
              $nameBtn={nameBtn}
              onClick={() => handleClickButton("location")}
            >
              Location
              {nameBtn === "location" && <BorderHighlight layoutId="border" />}
            </Button>
            <Button
              id="login"
              $nameBtn={nameBtn}
              onClick={() => handleClickButton("login")}
            >
              Login
              {nameBtn === "login" && <BorderHighlight layoutId="border" />}
            </Button>
          </AreaButton>
          <Fields>
            <ul>
              <li>
                <h3>First Name</h3>
                <p>{findUser?.name.first}</p>
              </li>
              <li>
                <h3>Last Name</h3>
                <p>{findUser?.name.last}</p>
              </li>
              <li>
                <h3>Title</h3>
                <p>{findUser?.name.title}</p>
              </li>
              <li>
                <h3>Date</h3>
                <p>{findUser ? formatDate(findUser.registered.date) : null}</p>
              </li>
              <li>
                <h3>Age</h3>
                <p>{findUser?.registered.age}</p>
              </li>
            </ul>
          </Fields>
        </TabInfo>
      )}
    </Container>
  );
};

export default SectionBottomUserDetails;
