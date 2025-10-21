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
import Loading from "../../Loading/Loading";
import Info from "../Info/Info";
import Location from "../Location/Location";
import Login from "../Login/Login";

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
            {nameBtn === "info" && (
              <Info
                first={findUser?.name.first ?? "Unknown"}
                last={findUser?.name.last ?? "Unknown"}
                title={findUser?.name.title ?? "Unknown"}
                date={findUser?.registered.date ?? "Unknown"}
                age={findUser?.registered.age ?? 0}
              />
            )}
            {nameBtn === "location" && (
              <Location
                city={findUser?.location.city ?? "Unknown"}
                country={findUser?.location.country ?? "Unknown"}
                state={findUser?.location.state ?? "Unknown"}
                name={findUser?.location.street.name ?? "Unknown"}
                number={findUser?.location.street.number ?? 0}
              />
            )}
            {nameBtn === "login" && (
              <Login username={findUser?.login.username ?? "Unknown"} />
            )}
          </Fields>
        </TabInfo>
      )}
    </Container>
  );
};

export default SectionBottomUserDetails;
