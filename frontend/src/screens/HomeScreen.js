import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {getProblems} from '../actions/problemsActions'
import HomeTable from "../components/rp/HomeTable";
import Upper from "../components/rp/Upper";
import Grid from "@material-ui/core/Grid";
import HomeSide from "../components/rp/HomeSide";

const Home = () => {
  const dispatch = useDispatch()

  const getProblemsAll = useSelector(state => state.getProblemsAll)
  const {loading,error,problems} = getProblemsAll


  useEffect(()=>{
    dispatch(getProblems())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Grid container direction="column" spacing={4} alignItems="center">
              <Upper />
              <Grid
                container
                item
                xs={11}
                spacing={4}
                style={{ marginTop: "6rem" }}
              >
                <HomeTable questions = { problems ? problems : null} />
                <HomeSide />
              </Grid>
            </Grid>
  );
};

export default Home;
