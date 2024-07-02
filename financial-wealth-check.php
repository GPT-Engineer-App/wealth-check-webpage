<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financial Wealth Check</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="financial-wealth-check.php">Financial Wealth Check</a></li>
                <li><a href="financial-tools.php">Financial Tools</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Financial Wealth Check</h1>
        <form action="submit-wealth-check.php" method="POST">
            <fieldset>
                <legend>Member 1</legend>
                <label for="member1FullName">Full Name</label>
                <input type="text" id="member1FullName" name="member1FullName" required>
                <label for="member1DOB">Date of Birth</label>
                <input type="date" id="member1DOB" name="member1DOB" required>
                <label for="member1ID">Member ID</label>
                <input type="text" id="member1ID" name="member1ID" required>
                <label for="member1GrossIncome">Gross Income</label>
                <input type="number" id="member1GrossIncome" name="member1GrossIncome" required>
                <label for="member1Occupation">Occupation</label>
                <input type="text" id="member1Occupation" name="member1Occupation" required>
            </fieldset>
            <fieldset>
                <legend>Member 2</legend>
                <label for="member2FullName">Full Name</label>
                <input type="text" id="member2FullName" name="member2FullName" required>
                <label for="member2DOB">Date of Birth</label>
                <input type="date" id="member2DOB" name="member2DOB" required>
                <label for="member2ID">Member ID</label>
                <input type="text" id="member2ID" name="member2ID" required>
                <label for="member2GrossIncome">Gross Income</label>
                <input type="number" id="member2GrossIncome" name="member2GrossIncome" required>
                <label for="member2Occupation">Occupation</label>
                <input type="text" id="member2Occupation" name="member2Occupation" required>
                <label for="isSelfEmployed">Is either member self-employed?</label>
                <input type="checkbox" id="isSelfEmployed" name="isSelfEmployed">
                <label for="abnHeldFor">ABN Held For</label>
                <input type="number" id="abnHeldFor" name="abnHeldFor">
                <label for="gstRegistered">GST Registered?</label>
                <input type="checkbox" id="gstRegistered" name="gstRegistered">
                <label for="grossIncome">Gross Income</label>
                <input type="number" id="grossIncome" name="grossIncome">
                <label for="heldFor">Held for (years)</label>
                <input type="number" id="heldFor" name="heldFor">
                <label>We intend to borrow in:</label>
                <input type="checkbox" id="jointNames" name="borrowIn[]" value="Joint Names">
                <label for="jointNames">Joint Names</label>
                <input type="checkbox" id="singleNames" name="borrowIn[]" value="Single Names">
                <label for="singleNames">Single Names</label>
                <input type="checkbox" id="companyTrust" name="borrowIn[]" value="Company / Trust">
                <label for="companyTrust">Company / Trust</label>
            </fieldset>
            <fieldset>
                <legend>Joint Details</legend>
                <label for="mailingAddress">Mailing Address</label>
                <input type="text" id="mailingAddress" name="mailingAddress" required>
                <label for="city">City</label>
                <input type="text" id="city" name="city" required>
                <label for="state">State</label>
                <input type="text" id="state" name="state" required>
                <label for="postcode">Postcode</label>
                <input type="text" id="postcode" name="postcode" required>
                <label for="contactH">Contact Number H</label>
                <input type="text" id="contactH" name="contactH" required>
                <label for="contactW">Contact Number W</label>
                <input type="text" id="contactW" name="contactW" required>
                <label for="contactM">Contact Number M</label>
                <input type="text" id="contactM" name="contactM" required>
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
                <label>Marital Status</label>
                <input type="checkbox" id="married" name="maritalStatus[]" value="Married">
                <label for="married">Married</label>
                <input type="checkbox" id="single" name="maritalStatus[]" value="Single">
                <label for="single">Single</label>
                <input type="checkbox" id="separated" name="maritalStatus[]" value="Separated">
                <label for="separated">Separated</label>
                <input type="checkbox" id="defacto" name="maritalStatus[]" value="Defacto">
                <label for="defacto">Defacto</label>
                <input type="checkbox" id="other" name="maritalStatus[]" value="Other">
                <label for="other">Other</label>
                <label for="dependents">Dependents?</label>
                <input type="checkbox" id="dependents" name="dependents">
                <label for="ages">Ages</label>
                <input type="text" id="ages" name="ages">
            </fieldset>
            <fieldset>
                <legend>Financial Position</legend>
                <label for="ownHome">OWN HOME</label>
                <textarea id="ownHome" name="ownHome"></textarea>
                <label for="investmentProperties">INVESTMENT PROPERTIES</label>
                <textarea id="investmentProperties" name="investmentProperties"></textarea>
                <label for="cashInBank">Cash in Bank</label>
                <input type="number" id="cashInBank" name="cashInBank">
                <label for="sharesOwned">Shares Owned</label>
                <input type="number" id="sharesOwned" name="sharesOwned">
                <label for="rentPay">I/We rent and pay ($) P/W</label>
                <input type="number" id="rentPay" name="rentPay">
                <label>I/We wish to purchase a property for:</label>
                <input type="checkbox" id="investment" name="purchaseFor[]" value="Investment">
                <label for="investment">Investment</label>
                <input type="checkbox" id="ownerOccupier" name="purchaseFor[]" value="Owner Occupier">
                <label for="ownerOccupier">Owner Occupier</label>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </main>
    <footer>
        <p>&copy; 2023 Property Club. All rights reserved.</p>
    </footer>
</body>
</html>