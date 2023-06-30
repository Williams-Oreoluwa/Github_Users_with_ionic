import {
  IonContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonItem,
  IonMenu,
  IonSplitPane,
  IonToggle,
  IonList,
  IonLabel,
  IonSearchbar,
  IonCardContent,
  IonCard,
  IonImg,
  IonRouterLink,
  IonFooter,
  IonLoading,
  RefresherEventDetail,
} from "@ionic/react";

import "./Home.css";
import {
  checkboxOutline,
  homeOutline,
  logOut,
  logOutOutline,
  logOutSharp,
  newspaperOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  logoGithub,
  moon,
  sunnyOutline,
  moonOutline,
  arrowBack,
} from "ionicons/icons";
import {
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const userApi = "https://api.github.com/users";

import githubSecretToken from "./githubToken";

const User: React.FC = () => {
  const { login } = useParams<{ login?: string }>();

  const [isLoading, isLoaded] = useIonLoading();
  const [light, setLight] = useState(true);
  const [user, setUser] = useState({
    login: "",
    avatar_url: "",
    name: "",
    location: "",
    public_repos: "",
    public_gists: "",
    followers: "",
    following: "",
    company: "",
    events_url: "",
    bio: "",
    email: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const router = useIonRouter();
  const logOutPage = async () => {
    await isLoading("Logging out.");
    setTimeout(() => {
      isLoaded();
      router.push("/", "root");
    }, 3000);
  };

  const switchColors = () => {
    document.body.classList.toggle("dark");
    setLight(!light);
  };
  const paths = [
    {
      name: "Home",
      url: "/home",
      icon: homeOutline,
    },
    {
      name: "Repositories",
      url: "/home",
      icon: syncOutline,
    },
    {
      name: "Settings",
      url: "/home",
      icon: settingsOutline,
    },
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <>
      <IonSplitPane when="xl" contentId="main" className="stuff">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"dark"}>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {paths.map((path, index) => {
              return (
                <>
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      detail={true}
                      routerLink={path.url}
                      routerDirection="none"
                      key={index}
                    >
                      {<IonIcon slot="start" icon={path.icon}></IonIcon>}
                      {path.name}
                    </IonItem>
                  </IonMenuToggle>
                </>
              );
            })}
            <IonList>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={light ? moonOutline : sunnyOutline}
                />
                <IonLabel>{light ? "Dark Mode" : "Light Mode"}</IonLabel>
                <IonToggle
                  slot="end"
                  name="darkMode"
                  onIonChange={switchColors}
                  color={light ? "light" : "dark"}
                />
              </IonItem>
            </IonList>

            <IonMenuToggle autoHide={false} onClick={logOutPage}>
              <IonItem detail={true} routerDirection="none" routerLink="/home">
                {<IonIcon slot="start" icon={logOutOutline}></IonIcon>}
                Logout
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonPage id="main">
          <IonHeader>
            <IonToolbar color={"dark"}>
              <IonButtons slot="start">
                <IonMenuButton color={"light"}></IonMenuButton>
              </IonButtons>
              <div className="header">
                <IonIcon
                  className="git-logo-header"
                  icon={logoGithub}
                  color={"light"}
                ></IonIcon>
                <IonTitle>GitHub</IonTitle>
              </div>
            </IonToolbar>
            <IonToolbar color={"dark"} className="dog">
              <IonSearchbar
                value={searchQuery}
                onIonInput={(e: any) => setSearchQuery(e.target.value)}
              />
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow className="place-items-center">
                <div className="user-section">
                  <div className="user-profile">
                    <IonCol>
           
                      <br />
                   
                      <div className="user-profile-image">
                        <img
                          className="user-image"
                          src={user.avatar_url}
                          alt=""
                        />
                      </div>
                    </IonCol>
                    <IonCol>
                      <div className="user-profile-details">
                        <div className="user-media">
                          <div className="followers">
                            <h2>Followers</h2>
                            <h2>{user.followers}</h2>
                          </div>
                          <div className="following">
                            <h2>Followers</h2>
                            <h2>{user.following}</h2>
                          </div>
                          <div className="repos">
                            <h2>Repos</h2>
                            <h2> {user.public_repos}</h2>
                          </div>
                          <div className="gist">
                            <h2>Gists</h2>
                            <h2> {user.public_gists}</h2>
                          </div>
                        </div>
                        <div className="user-names">
                          <h1>
                            Name : {user.name === null ? "Unknown" : user.name}
                          </h1>
                          <h2>
                            {" "}
                            User-Name :{" "}
                            {user.login === null ? "Unknown" : user.login}
                          </h2>

                          <h2>
                            {" "}
                            Company :{" "}
                            {user.company === null ? "Unknown" : user.company}
                          </h2>
                          <h2>
                            {" "}
                            Location :{" "}
                            {user.location === null ? "Unknown" : user.location}
                          </h2>
                          <h2>
                            {" "}
                            Email :{" "}
                            {user.email === null ? "Unknown" : user.email}
                          </h2>
                          <h2>
                            {" "}
                            Bio : {user.bio === null ? "Unknown" : user.bio}
                          </h2>
                        </div>
                        <IonButton color={"dark"}>
                        <IonRouterLink
                          routerLink={"/home"}
                          color={"light"}
                          className="back-btn"
                        >
                          BACK
                        </IonRouterLink>
                      </IonButton>
                      </div>
                    </IonCol>
                  </div>
                </div>
              </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <div className="btn-wrapper" style={{ textAlign: "center" }}>
                <IonTitle>&copy; GitHub 2023</IonTitle>
              </div>
            </IonToolbar>
          </IonFooter>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default User;

// import {
//     IonContent,
//     IonHeader,
//     IonPage,
//     IonRouterLink,
//     IonTitle,
//     IonToolbar,
//   } from "@ionic/react";
//   import React, { useState, useEffect } from "react";
//   import { useParams } from "react-router";

//   const userApi = "https://api.github.com/users";

//   const Users: React.FC = () => {
//     const { login } = useParams<{ login?: string }>();
//     const [user, setUser] = useState({id: , name:'', avatar_url:''})

//     const getUser = async () => {
//       const res = await fetch(`${userApi}/${login}`);
//       const user = await res.json();
//       console.log(user)
//       setUser(user);
//     };

//     useEffect(() => {
//       getUser();
//     }, []);

//     return (
//       <IonPage>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Page Title</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">
//           <IonRouterLink routerLink="/home">back</IonRouterLink>
//           <div>
//             <h2>{user.name}</h2>
//             <h2>{user.id}</h2>
//             <img src={user.avatar_url} alt="" />

//           </div>
//         </IonContent>
//       </IonPage>
//     );
//   };

//   export default Users;
