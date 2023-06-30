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
} from "ionicons/icons";
import {
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useEffect, useState } from "react";
const api = "https://api.github.com/users";

import githubSecretToken from "./githubToken";

const Home: React.FC = () => {
  const [isLoading, isLoaded] = useIonLoading();
  const [light, setLight] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
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
            <div className="section">
              {users.length < 1 ? (
                <IonLoading>Loading Users</IonLoading>
              ) : (
                users
                  .filter((user) =>
                    user.login.toLowerCase().includes(searchQuery)
                  )
                  .map((user) => {
                    const { id, login, avatar_url } = user;
                    const profilePage = async () => {
                      await isLoading("Loading Profile page.");
                      setTimeout(() => {
                        isLoaded();
                        router.push(`/home/users/${login}`, 'forward');
                        window.location.reload();
                      }, 1000);
                    };
                    return (
                      <>
                        <section className="github-users">
                          <article className="user">
                            <IonCard className="card">
                              <IonCardContent
                                className={`users-data ${
                                  light
                                    ? "ion-background-color-light"
                                    : "ion-background-color-dark"
                                }`}
                              >
                                <div className="user-data">
                                  <img
                                    className="avatar-image"
                                    src={avatar_url}
                                    alt={login}
                                  />
                                  <h2>{login}</h2>
                                </div>
                                <div className="users-btn">
                                  <IonButton
                                    className="profile-btn"
                                    slot="end"
                                    color={`dark`}
                                    onClick={profilePage}
                                  >
                                    View Profile
                                  </IonButton>
                                </div>
                              </IonCardContent>
                            </IonCard>
                          </article>
                        </section>
                      </>
                    );
                  })
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default Home;
