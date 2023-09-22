const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log.apply(response);

    const rawData = await response.json(); // รับ json มาไว้ในตัวแปร rawData

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`); // เช็คว่า response ok มั้ย ถ้าไม่ให้ทำ throw new Error
    }

    const courses = rawData.courses; // ประกาศตัวแปร courses ให้มีค่าเท่ากับ courses ใน rawData

    for (let i = 0; i < courses.length; i++) {
      // เช็ค Loop จาก courses.length
      const main = document.getElementById("main"); // ประกาศตัวแปร main หาค่าที่มี id='main'
      const newDiv = document.createElement("div"); // ประกาศตัวแปร newDiv สร้าง element div
      // เขียน html ลงใน newDiv
      newDiv.innerHTML = `
      <h3>${courses[i].courseNo} ${courses[i].abbrName}</h3>
      <h4>คอร์ส</h4>
      <p>${courses[i].courseNameTh} ${courses[i].courseNameEn}</p>
      <h4>ภาควิชา / สาขาวิชา</h4>
      <p>${courses[i].department}</p>
      <h4>จำนวนหน่วยกิต</h4>
      <p>${courses[i].credit}</p>
      <h4>ประเภท genEd</h4>
      <p>${courses[i].genEdType}</p>
      <h4>จำนวนที่นั่ง</h4>
      <p>${courses[i].totalSeats}</p>
      `;

      main.appendChild(newDiv); // เพิ่ม element ใน newDiv เข้าไปใน main
    }
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
