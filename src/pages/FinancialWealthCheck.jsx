import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const FinancialWealthCheck = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      navigate("/");
    } else {
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4">Financial Wealth Check</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-xl">1. Member 1</h2>
        <div>
          <Label htmlFor="member1FullName">Full Name</Label>
          <Input id="member1FullName" {...register("member1FullName")} required />
        </div>
        <div>
          <Label htmlFor="member1DOB">Date of Birth</Label>
          <Input id="member1DOB" type="date" {...register("member1DOB")} required />
        </div>
        <div>
          <Label htmlFor="member1ID">Member ID</Label>
          <Input id="member1ID" {...register("member1ID")} required />
        </div>
        <div>
          <Label htmlFor="member1GrossIncome">Gross Income</Label>
          <Input id="member1GrossIncome" type="number" {...register("member1GrossIncome")} required />
        </div>
        <div>
          <Label htmlFor="member1Occupation">Occupation</Label>
          <Input id="member1Occupation" {...register("member1Occupation")} required />
        </div>

        <h2 className="text-xl">2. Member 2</h2>
        <div>
          <Label htmlFor="member2FullName">Full Name</Label>
          <Input id="member2FullName" {...register("member2FullName")} required />
        </div>
        <div>
          <Label htmlFor="member2DOB">Date of Birth</Label>
          <Input id="member2DOB" type="date" {...register("member2DOB")} required />
        </div>
        <div>
          <Label htmlFor="member2ID">Member ID</Label>
          <Input id="member2ID" {...register("member2ID")} required />
        </div>
        <div>
          <Label htmlFor="member2GrossIncome">Gross Income</Label>
          <Input id="member2GrossIncome" type="number" {...register("member2GrossIncome")} required />
        </div>
        <div>
          <Label htmlFor="member2Occupation">Occupation</Label>
          <Input id="member2Occupation" {...register("member2Occupation")} required />
        </div>
        <div>
          <Label htmlFor="isSelfEmployed">Is either member self-employed?</Label>
          <Input id="isSelfEmployed" type="checkbox" {...register("isSelfEmployed")} />
        </div>
        <div>
          <Label htmlFor="abnHeldFor">ABN Held For</Label>
          <Input id="abnHeldFor" type="number" {...register("abnHeldFor")} />
        </div>
        <div>
          <Label htmlFor="gstRegistered">GST Registered?</Label>
          <Input id="gstRegistered" type="checkbox" {...register("gstRegistered")} />
        </div>
        <div>
          <Label htmlFor="grossIncome">Gross Income</Label>
          <Input id="grossIncome" type="number" {...register("grossIncome")} />
        </div>
        <div>
          <Label htmlFor="heldFor">Held for (years)</Label>
          <Input id="heldFor" type="number" {...register("heldFor")} />
        </div>
        <div>
          <Label htmlFor="borrowIn">We intend to borrow in:</Label>
          <div>
            <Input id="jointNames" type="checkbox" {...register("borrowInJointNames")} />
            <Label htmlFor="jointNames">Joint Names</Label>
          </div>
          <div>
            <Input id="singleNames" type="checkbox" {...register("borrowInSingleNames")} />
            <Label htmlFor="singleNames">Single Names</Label>
          </div>
          <div>
            <Input id="companyTrust" type="checkbox" {...register("borrowInCompanyTrust")} />
            <Label htmlFor="companyTrust">Company / Trust</Label>
          </div>
        </div>

        <h2 className="text-xl">3. Joint Details</h2>
        <div>
          <Label htmlFor="mailingAddress">Mailing Address</Label>
          <Input id="mailingAddress" {...register("mailingAddress")} required />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" {...register("city")} required />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input id="state" {...register("state")} required />
        </div>
        <div>
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" {...register("postcode")} required />
        </div>
        <div>
          <Label htmlFor="contactH">Contact Number H</Label>
          <Input id="contactH" {...register("contactH")} required />
        </div>
        <div>
          <Label htmlFor="contactW">Contact Number W</Label>
          <Input id="contactW" {...register("contactW")} required />
        </div>
        <div>
          <Label htmlFor="contactM">Contact Number M</Label>
          <Input id="contactM" {...register("contactM")} required />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} required />
        </div>
        <div>
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <div>
            <Input id="married" type="checkbox" {...register("maritalStatusMarried")} />
            <Label htmlFor="married">Married</Label>
          </div>
          <div>
            <Input id="single" type="checkbox" {...register("maritalStatusSingle")} />
            <Label htmlFor="single">Single</Label>
          </div>
          <div>
            <Input id="separated" type="checkbox" {...register("maritalStatusSeparated")} />
            <Label htmlFor="separated">Separated</Label>
          </div>
          <div>
            <Input id="defacto" type="checkbox" {...register("maritalStatusDefacto")} />
            <Label htmlFor="defacto">Defacto</Label>
          </div>
          <div>
            <Input id="other" type="checkbox" {...register("maritalStatusOther")} />
            <Label htmlFor="other">Other</Label>
          </div>
        </div>
        <div>
          <Label htmlFor="dependents">Dependents?</Label>
          <Input id="dependents" type="checkbox" {...register("dependents")} />
        </div>
        <div>
          <Label htmlFor="ages">Ages</Label>
          <Input id="ages" {...register("ages")} />
        </div>

        <h2 className="text-xl">4. Financial Position</h2>
        <div>
          <Label htmlFor="ownHome">OWN HOME</Label>
          <Textarea id="ownHome" {...register("ownHome")} />
        </div>
        <div>
          <Label htmlFor="investmentProperties">INVESTMENT PROPERTIES</Label>
          <Textarea id="investmentProperties" {...register("investmentProperties")} />
        </div>
        <div>
          <Label htmlFor="cashInBank">Cash in Bank</Label>
          <Input id="cashInBank" type="number" {...register("cashInBank")} />
        </div>
        <div>
          <Label htmlFor="sharesOwned">Shares Owned</Label>
          <Input id="sharesOwned" type="number" {...register("sharesOwned")} />
        </div>
        <div>
          <Label htmlFor="rentPay">I/We rent and pay ($) P/W</Label>
          <Input id="rentPay" type="number" {...register("rentPay")} />
        </div>
        <div>
          <Label htmlFor="purchaseFor">I/We wish to purchase a property for:</Label>
          <div>
            <Input id="investment" type="checkbox" {...register("purchaseForInvestment")} />
            <Label htmlFor="investment">Investment</Label>
          </div>
          <div>
            <Input id="ownerOccupier" type="checkbox" {...register("purchaseForOwnerOccupier")} />
            <Label htmlFor="ownerOccupier">Owner Occupier</Label>
          </div>
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default FinancialWealthCheck;