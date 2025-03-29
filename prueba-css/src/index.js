
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `  
  <section class="header__wrapper">
        <h1 class="header__title">
            Unique element challenge
        </h1>
        <span class="header__logo">
            <img src="./src/assets/logo.svg" alt="Logo"/>
        </span>
    </section>
    <section class="content__wrapper">
        <div class="content__text">
            <h4 class="content__title">
                Target
            </h4>
            <p class="content__description">
                Find the unique value in the array that is not duplicated. Use the dubbed function to return the unique
                element
            </p>
            <h4 class="content__title">
                Considerations
            </h4>
            <div class="content__description">
                <ul>
                    <li>
                        Values are <b>duplicated only twice</b>
                    </li>
                    <li>
                        There is <b>only one non duplicate value</b>
                    </li>
                    <li>
                        The non duplicate value can be placed <b>anywhere on the array</b>
                    </li>
                    <li>
                        The result must be an <b>integer</b>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content__table">
            <div class="table-header">
                <span class="cell-title">Test Data</span>
                <span id="test-data">${arrayTest}</span>
            </div>
            <div class="table-body">
                <div class="table-left">
                    <span class="cell-title">Expected Result</span>
                    <span id="expected">4</span>
                </div>
                <div class="table-right">
                    <span class="cell-title">Your Result</span>
                    <span id="result">4</span>
                </div>
            </div>
        </div>
    </section>
`;
