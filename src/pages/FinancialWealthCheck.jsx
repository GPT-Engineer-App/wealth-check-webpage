import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Import Card components
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
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl mb-4">Financial Wealth Check</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-2 border-gray-300 shadow-lg">
          <CardHeader>
            <h2 className="text-xl">1. Member 1</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="member1FullName">Full Name</Label>
              <Input id="member1FullName" {...register("member1FullName")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member1DOB">Date of Birth</Label>
              <Input id="member1DOB" type="date" {...register("member1DOB")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member1ID">Member ID</Label>
              <Input id="member1ID" {...register("member1ID")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member1GrossIncome">Gross Income</Label>
              <Input id="member1GrossIncome" type="number" {...register("member1GrossIncome")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member1Occupation">Occupation</Label>
              <Input id="member1Occupation" {...register("member1Occupation")} required className="border-2 border-gray-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-300 shadow-lg">
          <CardHeader>
            <h2 className="text-xl">2. Member 2</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="member2FullName">Full Name</Label>
              <Input id="member2FullName" {...register("member2FullName")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member2DOB">Date of Birth</Label>
              <Input id="member2DOB" type="date" {...register("member2DOB")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member2ID">Member ID</Label>
              <Input id="member2ID" {...register("member2ID")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member2GrossIncome">Gross Income</Label>
              <Input id="member2GrossIncome" type="number" {...register("member2GrossIncome")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="member2Occupation">Occupation</Label>
              <Input id="member2Occupation" {...register("member2Occupation")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="isSelfEmployed">Is either member self-employed?</Label>
              <Input id="isSelfEmployed" type="checkbox" {...register("isSelfEmployed")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="abnHeldFor">ABN Held For</Label>
              <Input id="abnHeldFor" type="number" {...register("abnHeldFor")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="gstRegistered">GST Registered?</Label>
              <Input id="gstRegistered" type="checkbox" {...register("gstRegistered")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="grossIncome">Gross Income</Label>
              <Input id="grossIncome" type="number" {...register("grossIncome")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="heldFor">Held for (years)</Label>
              <Input id="heldFor" type="number" {...register("heldFor")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="borrowIn">We intend to borrow in:</Label>
              <div>
                <Input id="jointNames" type="checkbox" {...register("borrowInJointNames")} className="border-2 border-gray-300" />
                <Label htmlFor="jointNames">Joint Names</Label>
              </div>
              <div>
                <Input id="singleNames" type="checkbox" {...register("borrowInSingleNames")} className="border-2 border-gray-300" />
                <Label htmlFor="singleNames">Single Names</Label>
              </div>
              <div>
                <Input id="companyTrust" type="checkbox" {...register("borrowInCompanyTrust")} className="border-2 border-gray-300" />
                <Label htmlFor="companyTrust">Company / Trust</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-300 shadow-lg">
          <CardHeader>
            <h2 className="text-xl">3. Joint Details</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="mailingAddress">Mailing Address</Label>
              <Input id="mailingAddress" {...register("mailingAddress")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" {...register("state")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input id="postcode" {...register("postcode")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="contactH">Contact Number H</Label>
              <Input id="contactH" {...register("contactH")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="contactW">Contact Number W</Label>
              <Input id="contactW" {...register("contactW")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="contactM">Contact Number M</Label>
              <Input id="contactM" {...register("contactM")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" {...register("email")} required className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <div>
                <Input id="married" type="checkbox" {...register("maritalStatusMarried")} className="border-2 border-gray-300" />
                <Label htmlFor="married">Married</Label>
              </div>
              <div>
                <Input id="single" type="checkbox" {...register("maritalStatusSingle")} className="border-2 border-gray-300" />
                <Label htmlFor="single">Single</Label>
              </div>
              <div>
                <Input id="separated" type="checkbox" {...register("maritalStatusSeparated")} className="border-2 border-gray-300" />
                <Label htmlFor="separated">Separated</Label>
              </div>
              <div>
                <Input id="defacto" type="checkbox" {...register("maritalStatusDefacto")} className="border-2 border-gray-300" />
                <Label htmlFor="defacto">Defacto</Label>
              </div>
              <div>
                <Input id="other" type="checkbox" {...register("maritalStatusOther")} className="border-2 border-gray-300" />
                <Label htmlFor="other">Other</Label>
              </div>
            </div>
            <div>
              <Label htmlFor="dependents">Dependents?</Label>
              <Input id="dependents" type="checkbox" {...register("dependents")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="ages">Ages</Label>
              <Input id="ages" {...register("ages")} className="border-2 border-gray-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-300 shadow-lg">
          <CardHeader>
            <h2 className="text-xl">4. Financial Position</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="ownHome">OWN HOME</Label>
              <Textarea id="ownHome" {...register("ownHome")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="investmentProperties">INVESTMENT PROPERTIES</Label>
              <Textarea id="investmentProperties" {...register("investmentProperties")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="cashInBank">Cash in Bank</Label>
              <Input id="cashInBank" type="number" {...register("cashInBank")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="sharesOwned">Shares Owned</Label>
              <Input id="sharesOwned" type="number" {...register("sharesOwned")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="rentPay">I/We rent and pay ($) P/W</Label>
              <Input id="rentPay" type="number" {...register("rentPay")} className="border-2 border-gray-300" />
            </div>
            <div>
              <Label htmlFor="purchaseFor">I/We wish to purchase a property for:</Label>
              <div>
                <Input id="investment" type="checkbox" {...register("purchaseForInvestment")} className="border-2 border-gray-300" />
                <Label htmlFor="investment">Investment</Label>
              </div>
              <div>
                <Input id="ownerOccupier" type="checkbox" {...register("purchaseForOwnerOccupier")} className="border-2 border-gray-300" />
                <Label htmlFor="ownerOccupier">Owner Occupier</Label>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default FinancialWealthCheck;