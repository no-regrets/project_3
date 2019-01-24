const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.get("/callback" ,function(req, res) {
  console.log("Callback was hit");
  console.log(req.query)
  // https://noregrets-project3.herokuapp.com/callback#access_token=xTZwBm0eI_pwiWTlvCTHff1srhz_IoN4&expires_in=7200&token_type=Bearer&state=zrk8Vd5YKmRhK6Zt60__H.Fku9oO_yjI&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UTXhPVGxGT1VFNE9UVXpRVVJGTXpBM01VWTJRalE1TWtVMk1FSkRRak5GTWtFd1FUUXlRZyJ9.eyJuaWNrbmFtZSI6Indlc2xleWtydWdlciIsIm5hbWUiOiJXZXMgS3J1Z2VyIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDA5MjczNTY_dj00IiwidXBkYXRlZF9hdCI6IjIwMTktMDEtMjRUMDM6Mzk6MTMuMzQ2WiIsImlzcyI6Imh0dHBzOi8vd2tydWdlci5hdXRoMC5jb20vIiwic3ViIjoiZ2l0aHVifDQwOTI3MzU2IiwiYXVkIjoicFBsNHpwdVJzTDBYcWNWQ3RUaTFGWmNYNHl0N080SEYiLCJpYXQiOjE1NDgzMDExNTMsImV4cCI6MTU0ODMzNzE1MywiYXRfaGFzaCI6IkZzSnN3T1UxQUQwU0Z5RFJSbUVoY3ciLCJub25jZSI6Ijlyc256SlFybWV2SFVOdGhyMzJnaXg3akdUZ3U5Y0ZRIn0.m9blgrZ_VZ6hdg5LHS71nJRHgeH4tBK9_-CWOJo9wQW1fucityIUtJk-ol69qbsnrRdJqi0g1z4ixp3YM1H8hhiGOMXslNMz0YCMu9crqb2BUnT66YP9xwrv3otRYZReO-26WkJV7RRXC59CXhbWYP2BK5QM8gRWjEehA0Zhe0P9Bw91Y_oLOkVir-PSrz3-7JeVn1A4F2WYa3uUEW7nVOXAAWB_vOrLVP_7BTLcdJEAVRVis1dcE4On1gDllzAPdcD1VPkLhDWU8P51YB4toPTqePGGlZVQMhGyzXsA_8OaMfM14gwnbrenDDNCffCJYXnA_8b8SWn2NhChuuVY3w
  res.redirect(200, `https://noregrets-project3.herokuapp.com/?key=value#token=${req.query}`)
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));

  // res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
// If no API routes are hit, send the React app
router.use(function(req, res) {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));

  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
