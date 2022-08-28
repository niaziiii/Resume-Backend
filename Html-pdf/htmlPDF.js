exports.html = () => {
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
            width: 60%;
            margin: auto;
            background-color: gray;
            height: 100vh;
        }

        table {
            padding: 4rem 2rem;
            background-color: white;
            width: 100%;
            margin-top: 3rem;
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
        table ,.subheading{
            border: 2px solid black;
            border-collapse: collapse;
        }
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
                <h1 class="mainHeading">Niazi</h1>
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
            <td>Jill</td>
            <td>Smith</td>
            <td>Smith</td>
            <td>Smith</td>
            <td>Smith</td>
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
            <td>Jill</td>
            <td>Smith</td>
            <td>Smith</td>
            <td>Smith</td>
            <td>Smith</td>
        </tr>

        <tr>
            <th colspan="3">
                <h1 class="heading">Your Previous Experince</h1>
            </th>
        </tr>
        <tr>
            <th colspan="2" class="job">Your First Previous job</th>
          
        </tr>
        <tr>
            <td colspan="4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum suscipit doloremque quia, modi iste, assumenda commodi blanditiis iure aliquid illo illum, et necessitatibus labore esse perspiciatis maxime delectus vel animi?</td>
        </tr>
        <tr>
            <th colspan="2" class="job">Your First Previous job</th>
          
        </tr>
        <tr>
            <td colspan="4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum suscipit doloremque quia, modi iste, assumenda commodi blanditiis iure aliquid illo illum, et necessitatibus labore esse perspiciatis maxime delectus vel animi?</td>
        </tr>

    </table>
</body>

</html>
    `
    )
}