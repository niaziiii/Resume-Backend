exports.html = (data) => {
    return (
        `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body {
        width: 100%;
        margin: auto;
        background-color: gray;
        height: 100vh;
    }

    table {
        padding: 4rem 2rem;
        background-color: white;
        width: 100%;
    }

    td,
    th {
        width: 10rem !;
        text-align: start;
    }

    td {
        margin-top: 2rem;
        padding: 1rem 0;
    }

    .heading {
        /* background-color: red; */
        font-size: 2rem;
    }
    .job{font-size: 1.5rem; }

    .mainHeading{
        text-align: center;
        font-size: 4rem;
    }
    </style>
</head>

<body>
    <table>
        <tr>
            <th colspan="5">
                <h1 class="mainHeading">${data.basic.firstName}</h1>
            </th>
        </tr>
        <tr>
            <th colspan="3">
                <h1 class="heading">Basic detail of recipent</h1>
            </th>
        </tr>
        <tr class="subheading" >
            <th>Full Name</th>
            <th>Father Name</th>
            <th>Date of Birth</th>
            <th>Email Address</th>
            <th>Phone Number</th>
        </tr>
     
        <tr>
            <td>${data.basic.firstName + ' ' + data.basic.lastName}</td>
            <td>${data.basic.fatherName}</td>
            <td>${data.basic.date}</td>
            <td>${data.basic.email}</td>
            <td>${data.basic.phoneNumber}</td>
        </tr>
        <tr>
            <th colspan="3">
                <h1 class="heading">Educational and Social</h1>
            </th>
        </tr>
        <tr class="subheading">
            <th>Your High School</th>
            <th>Your University </th>
            <th>Your address</th>
            <th>Your social status</th>
            <th>Github Link</th>
        </tr>
        <tr>
            <td>${data.details.highScool}</td>
            <td>${data.details.university}</td>
            <td>${data.details.homeAddress}</td>
            <td>${data.details.status}</td>
            <td>${data.details.githubLink}</td>
        </tr>

        <tr>
            <th colspan="3">
                <h1 class="heading">Your Previous Experince</h1>
            </th>
        </tr>
        <tr>
            <th colspan="2" class="job">${data.jobInfo.firstJob}</th>
        </tr>
        <tr>
            <td colspan="4">${data.jobInfo.firstJobAboutUs}</td>
        </tr>
        <tr>
            <th colspan="2" class="job">${data.jobInfo.secondJob}</th>
          
        </tr>
        <tr>
            <td colspan="4">${data.jobInfo.secondJobAboutUs}</td>
        </tr>

    </table>
</body>

</html>
    `
    )
}