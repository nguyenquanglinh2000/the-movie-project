<template>
  <div>
    <div class="containerDetail">
      <div class="left">
        <img
          src="../asset/image/pexels-anjana-c-674010.jpg"
          alt="movie.name"
          style="width: 100%"
        />
      </div>
      <div class="right">
        <h3>Test Layout</h3>
        <p><strong>Thời gian :</strong> 120 Min</p>
        <p><strong>Đạo diễn:</strong> Tran Anh Hung</p>
        <p>
          <strong>Diễn viên:</strong> Benoît Magimel, Juliette Binoche, Patrick
          d'Assumçao, Emmanuel Salingerr
        </p>
        <p>
          <strong>Nội dung:</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div></div>

        <button>Xem Phim</button>
      </div>
    </div>
  </div>
</template>
<style>



.containerDetail {
  display: flex;
  justify-content: space-between;
  margin: 50px 100px;
}

.left {
  width: 35%;
}
.right{
  width: 60%;
}

h3 {
  color: red;
  font-size: 25px;
}

h5,
p,
small {
  color: #837D7C;
}

h4 {
  color: red;
}

p {
  line-height: 25px;
}

h5 {
  font-size: 15px;
}




.add label {
  padding: 10px 30px 0 20px;
  border-radius: 50px;
  line-height: 0;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background:red;
  color: white;
  margin-top: 20%;
  border-radius: 30px;
}

@media only screen and (max-width:768px) {
  .containerDetail {
    max-width: 90%;
    margin: auto;
    height: auto;
  }

  .left, .right {
    width: 100%;
  }

  .container {
    flex-direction: column;
  }
}

@media only screen and (max-width:511px) {
  .container {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }

  .left, .right {
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .option {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

