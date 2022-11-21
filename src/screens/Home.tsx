import { gql, useQuery } from "@apollo/client";
import {
  FunctionComponent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import styled from "styled-components";
// import { logUserOut } from "../apollo";
import Avatar from "../components/auth/Avatar";
import { FatText } from "../components/shared";

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      user {
        username
      }
      caption
      createdAt
      isMine
    }
  }
`;

const Home: FunctionComponent = () => {
  const { data } = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  return (
    <div>
      {data?.seeFeed?.map(
        (photo: {
          id: Key | null | undefined;
          user: {
            avatar: string | undefined;
            username:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          };
        }) => (
          <PhotoContainer key={photo.id}>
            <PhotoHeader>
              <Avatar url={photo.user.avatar} />
              <Username>{photo.user.username}</Username>
            </PhotoHeader>
          </PhotoContainer>
        )
      )}
    </div>
  );
};
export default Home;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
`;
const PhotoHeader = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 5px;
`;
