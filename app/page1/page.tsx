import React from "react";
import Link from "next/link";

const Page1: React.FC = () => {
  const environmentImages = [
    "https://th.bing.com/th/id/R.2d92b212b1b026bd6d9bb79f2fe0d1e4?rik=DkgspsIEeX1LNg&riu=http%3a%2f%2ffarm3.static.flickr.com%2f2693%2f4053077192_52b2165fe8_o.jpg&ehk=DFgONuwGfcByVLj2K6NLuShsTR5RgYCX5nM7FC1zwDo%3d&risl=1&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.wIUxzLQ6VEPwpxjfer-VtQEsDH?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.6ed0569f23c4df00a50c01cc21c3acc2?rik=z8%2fkD9cwJo4OcA&riu=http%3a%2f%2ffarm2.static.flickr.com%2f1161%2f872293700_cda890605a_o.jpg&ehk=ttp%2bhBR%2fXgEFTeODn%2bWMBRCdjMKFHpigfztY26cU4Nw%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.266114169b77361a8c7e53bbc5c63ed5?rik=uo%2f23rso4zTp%2fg&riu=http%3a%2f%2ffarm3.static.flickr.com%2f2558%2f4124871182_4d2a8521e2_o.jpg&ehk=RHzkB8reVvsKQT7JhVZkoWOtEESuHy0Wj0FXVetui8M%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.5a70d889deb5daa948132d370c312f62?rik=YJNiOoekv5%2frWw&riu=http%3a%2f%2ffarm5.static.flickr.com%2f4011%2f4504949513_df8494b480_o.jpg&ehk=bvwzvIeQ9auETsNt83JvD9oidJtxs%2fN9MbOnw%2ffmz8Y%3d&risl=&pid=ImgRaw&r=0",
    "https://lh6.googleusercontent.com/proxy/1TySl3qzYzTistHqqedRvxMc6nmH30dOXyUWMzuLbIPWqDb7gb7kSUplPhPUCJznwVxF6QVUsmskoVlBG-rfLgqwQm6ljRFpO7yIcyifemAGU18=s0-d",
    "https://th.bing.com/th/id/R.f74607390dc95de5784feccc1a59e7a6?rik=7c3BQa%2fZnfUDoA&riu=http%3a%2f%2ffarm3.static.flickr.com%2f2384%2f2432306114_3845c51d53_o.jpg&ehk=GFXHbxwn3wgK%2fo9ORz0wGY0QeKvJFMq7X74AQ6f9ZPo%3d&risl=1&pid=ImgRaw&r=0",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
  ];

  return (
    <>
      <div>
        <header
          style={{
            backgroundImage:
              'url("https://kyoto-kogakkan.mkg.ac.jp/wp-content/uploads/2014/09/5c0aee36de64f0c81223a7b47a0b5016.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
            paddingLeft: "0rem",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "3rem",
              fontWeight: "bold",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
              margin: 0,
            }}
          >
            部活紹介
          </h1>
        </header>
      </div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          paddingLeft: "4rem", // 左の余白
          paddingRight: "4rem", // 右の余白
        }}
      >
        <main>
          <nav
            style={{
              marginBottom: "2rem",
              fontSize: "1.2rem",
              color: "#555",
              textTransform: "uppercase",
            }}
          >
            <h4 style={{ margin: 0 }}>
              <Link href="/" style={{ color: "#555" }}>
                HOME
              </Link>{" "}
              {">"} ABOUT
            </h4>
          </nav>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              少林寺拳法とは
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              少林寺拳法について書く
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              活動日
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              月・木・土
              <br />
              17:00 ～ 20:00
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              活動内容
            </h2>
            <ul
              style={{
                paddingTop: "1rem",
                listStyleType: "disc",
                marginLeft: "20px",
                fontSize: "1.2rem",
                color: "#555",
              }}
            >
              <li>内容１</li>
              <li>内容２</li>
              <li>内容３</li>
            </ul>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              かかる費用
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              💰 部費　 : 1,000円
              <br /> 💰 連盟費 : 3,500円
              <br /> 💰 道着費 :
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              年間スケジュール
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              スケジュールを書く
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              実績
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              実績について書く
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              環境
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "16px",
                paddingTop: "1rem",
              }}
            >
              {environmentImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={image}
                    alt={`環境画像 ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#000066",
                fontFamily: "'Noto Sans', sans-serif",
                borderBottom: "1.5px solid black",
                paddingBottom: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              アクセス
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
              〒180-8633
              <br /> <br />
              東京都武蔵野市吉祥寺北町３丁目３−１
            </p>

            {/* Google Mapsを埋め込む */}
            <div
              style={{
                marginTop: "1rem",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5037631415016!2d139.57131077598044!3d35.71382732818242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee522d0b612d%3A0xaadc4b6ba9248642!2z5oiQ6LmK5aSn5a2m!5e0!3m2!1sja!2sjp!4v1730874950995!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page1;
