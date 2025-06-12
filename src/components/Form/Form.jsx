// import React, { useState } from "react";
// import {
//   FormContainer,
//   FormSection,
//   Label,
//   Input,
//   Select,
//   CheckboxLabel,
//   CheckboxGroup,
//   SubmitButton,
//   Title,
// } from "./styles";

// const healthConditionsList = [
//   "Diabetes",
//   "Hypertension",
//   "Cholesterol",
//   "Heart Disease",
//   "Obesity",
//   "Lactose Intolerance",
//   "Gluten Allergy",
// ];

// const dietTypes = [
//   "Vegan",
//   "Vegetarian",
//   "Keto",
//   "Low-Carb",
//   "Low-Fat",
//   "Paleo",
//   "High-Protein",
//   "Diabetic-Friendly",
// ];

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     weight: "",
//     height: "",
//     activity: "",
//     healthConditions: [],
//     diet: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e, field) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => {
//       const updatedList = checked
//         ? [...prev[field], value]
//         : prev[field].filter((item) => item !== value);
//       return { ...prev, [field]: updatedList };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // you can send `formData` to backend/API here
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Title>Health & Diet Form</Title>

//       {/* Basic Profile */}
//       <FormSection>
//         <Label>Name</Label>
//         <Input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <Label>Age</Label>
//         <Input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />

//         <Label>Gender</Label>
//         <Select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Other</option>
//         </Select>

//         <Label>Height (cm)</Label>
//         <Input
//           type="number"
//           name="height"
//           value={formData.height}
//           onChange={handleChange}
//           required
//         />

//         <Label>Weight (kg)</Label>
//         <Input
//           type="number"
//           name="weight"
//           value={formData.weight}
//           onChange={handleChange}
//           required
//         />

//         <Label>Activity Level</Label>
//         <Select
//           name="activity"
//           value={formData.activity}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="Sedentary">Sedentary</option>
//           <option value="Lightly Active">Lightly Active</option>
//           <option value="Active">Active</option>
//           <option value="Very Active">Very Active</option>
//         </Select>
//       </FormSection>

//       {/* Health Conditions */}
//       <FormSection>
//         <Label>Health Conditions</Label>
//         <CheckboxGroup>
//           {healthConditionsList.map((condition) => (
//             <CheckboxLabel key={condition}>
//               <input
//                 type="checkbox"
//                 value={condition}
//                 checked={formData.healthConditions.includes(condition)}
//                 onChange={(e) => handleCheckboxChange(e, "healthConditions")}
//               />
//               {condition}
//             </CheckboxLabel>
//           ))}
//         </CheckboxGroup>
//       </FormSection>

//       {/* Dietary Preferences */}
//       <FormSection>
//         <Label>Dietary Preferences</Label>
//         <CheckboxGroup>
//           {dietTypes.map((diet) => (
//             <CheckboxLabel key={diet}>
//               <input
//                 type="checkbox"
//                 value={diet}
//                 checked={formData.diet.includes(diet)}
//                 onChange={(e) => handleCheckboxChange(e, "diet")}
//               />
//               {diet}
//             </CheckboxLabel>
//           ))}
//         </CheckboxGroup>
//       </FormSection>

//       <SubmitButton type="submit">Submit</SubmitButton>
//     </FormContainer>
//   );
// };

// export default Form;
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  FormContainer,
  FormSection,
  Label,
  Input,
  Select,
  CheckboxLabel,
  CheckboxGroup,
  SubmitButton,
  Title,
} from "./styles";

const healthConditionsList = [
  "Diabetes",
  "Hypertension",
  "Cholesterol",
  "Heart Disease",
  "Obesity",
  "Lactose Intolerance",
  "Gluten Allergy",
];

const dietTypes = [
  "Vegan",
  "Vegetarian",
  "Keto",
  "Low-Carb",
  "Low-Fat",
  "Paleo",
  "High-Protein",
  "Diabetic-Friendly",
];

export default function HealthForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/user", data, {
        withCredentials: true,
      });
      window.location.reload(); // <-- This will reload and fetch userData in Assistant
    } catch (err) {
      alert("Failed to submit form: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Health & Diet Form</Title>

      {/* Basic Profile */}
      <FormSection>
        <Label>Name</Label>
        <Input {...register("name", { required: true })} />

        <Label>Age</Label>
        <Input type="number" {...register("age", { required: true })} />

        <Label>Gender</Label>
        <Select {...register("gender", { required: true })}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Select>

        <Label>Height (cm)</Label>
        <Input type="number" {...register("height", { required: true })} />

        <Label>Weight (kg)</Label>
        <Input type="number" {...register("weight", { required: true })} />

        <Label>Activity Level</Label>
        <Select {...register("activity", { required: true })}>
          <option value="">Select</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Active">Active</option>
          <option value="Very Active">Very Active</option>
        </Select>
      </FormSection>

      {/* Health Conditions */}
      <FormSection>
        <Label>Health Conditions</Label>
        <CheckboxGroup>
          {healthConditionsList.map((condition) => (
            <CheckboxLabel key={condition}>
              <input
                type="checkbox"
                value={condition}
                {...register("healthConditions")}
              />
              {condition}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FormSection>

      {/* Dietary Preferences */}
      <FormSection>
        <Label>Dietary Preferences</Label>
        <CheckboxGroup>
          {dietTypes.map((diet) => (
            <CheckboxLabel key={diet}>
              <input type="checkbox" value={diet} {...register("diet")} />
              {diet}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FormSection>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
