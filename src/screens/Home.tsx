import { gql, useQuery } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, Key } from "react";
import styled from "styled-components";
// import { logUserOut } from "../apollo";
import Avatar from "../components/auth/Avatar";
import { FatText } from "../components/shared";

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      createdAt
      isMine
      isLiked
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
          id: Key | undefined;
          user: {
            avatar: string | undefined;
            username: string | undefined;
          };
          file: string | undefined;
          likes: number | undefined;
          isLiked: boolean | undefined;
        }) => (
          <PhotoContainer key={photo.id}>
            <PhotoHeader>
              <Avatar lg url={photo.user.avatar} />
              <Username>{photo.user.username}</Username>
            </PhotoHeader>
            <PhotoFile src={photo.file} alt={photo.file} />
            <PhotoData>
              <PhotoActions>
                <div>
                  <PhotoAction>
                    <FontAwesomeIcon
                      style={{ color: photo.isLiked ? "tomato" : "inherit" }}
                      icon={photo.isLiked ? SolidHeart : faHeart}
                    />
                  </PhotoAction>
                  <PhotoAction>
                    <FontAwesomeIcon icon={faComment} />
                  </PhotoAction>
                  <PhotoAction>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </PhotoAction>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
              </PhotoActions>
              <Likes>
                {photo.likes !== undefined && photo.likes > 1
                  ? `${photo.likes} likes`
                  : `${photo.likes} like`}
              </Likes>
            </PhotoData>
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
  margin-bottom: 60px;
  max-width: 615px;
`;
const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const PhotoFile = styled.img`
  min-width: 100%;
  max-width: 100%;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;
const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;
const PhotoAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;
const Username = styled(FatText)`
  margin-left: 15px;
`;
