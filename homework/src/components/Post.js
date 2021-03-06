import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  const delClick = () => {
    let del = prompt("삭제를 원하시면 'delete'를 입력해 주세요.");

    if (del === "delete") {
      dispatch(postActions.delPostFB(props.id));
      alert("삭제가 완료됐습니다.");
    } else {
      alert("삭제가 취소됐습니다.");
      window.location.reload();
    }
  };
  console.log(props);
  if (props.layout === "right") {
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              {props.is_me && (
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={() => {
                    history.push(`/write/${props.id}`);
                  }}
                >
                  수정
                </Button>
              )}
              {props.is_me && (
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={() => {
                    delClick();
                  }}
                >
                  삭제
                </Button>
              )}

              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid is_flex>
            <Grid padding="16px">
              <Text>{props.contents}</Text>
            </Grid>
            <Grid
              is_shadow
              _onClick={() => {
                history.push(`/post/${props.id}`);
              }}
            >
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </Grid>

          <Grid padding="16px">
            <Text margin="0px" bold>
              댓글 {props.comment_cnt}개
            </Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (props.layout === "left") {
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              {props.is_me && (
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={() => {
                    history.push(`/write/${props.id}`);
                  }}
                >
                  수정
                </Button>
              )}
              {props.is_me && (
                <Button
                  width="auto"
                  padding="4px"
                  margin="4px"
                  _onClick={() => {
                    delClick();
                  }}
                >
                  삭제
                </Button>
              )}

              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid is_flex>
            <Grid
              is_shadow
              _onClick={() => {
                history.push(`/post/${props.id}`);
              }}
            >
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
            <Grid padding="16px">
              <Text>{props.contents}</Text>
            </Grid>
          </Grid>

          <Grid padding="16px">
            <Text margin="0px" bold>
              댓글 {props.comment_cnt}개
            </Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  delClick();
                }}
              >
                삭제
              </Button>
            )}

            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid
          is_shadow
          _onClick={() => {
            history.push(`/post/${props.id}`);
          }}
        >
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "bong",
    user_profile:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg",
  },
  image_url:
    "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
