import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type","text/html;charset=utf-8");
    res.end("主頁");
});

app.get("/p/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    let contentText = "";
    if(id === "CvRz0e3Awmi"){
        contentText = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
    }else if(id === "CvZP-PIguWG"){
        contentText = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
    }
    res.send(contentText)
});

app.listen(3000, () => {
    console.log("服務已啟動於 http://localhost:3000");
});

