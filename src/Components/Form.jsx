import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import "./Form.css";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
export const Form = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  async function handleFormSubmit(data) {
    console.log("data", data);
    const response = await fetch(
      "https://odd-cyan-wildebeest-kilt.cyclic.app/submit-form",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      toast({
        title: "Form Submitted Successfully.",
        position: "top-center",
        description: "",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      reset();
    } else {
      toast({
        title: "Form Submission Failed.",
        description: "",
        position: "top-center",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  function getErrorMessage(fieldName) {
    console.log("fieldName", fieldName);
    if (fieldName?.type === "required") {
      return <p className="errorMsg"> This field is required</p>;
    }
    if (fieldName?.message) {
      return <p className="errorMsg"> {fieldName?.message}</p>;
    }
  }
  const toast = useToast();
  console.log(errors, "error");
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="formContainer">
          <div className="item">
            <p className="heading">
              Email
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("email", {
                required: true,
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 ||
                    "The email should have at most 50 characters",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.email)}
          </div>
          <div className="item">
            <p className="heading">
              Full Name <span className="asterik">*</span>
            </p>
            <Input
              {...register("fullName", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.fullName)}
          </div>
          <div className="item">
            <p className="heading">
              Age<span className="asterik">*</span>
            </p>
            <Input
              {...register("age", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.age)}
          </div>
          <div className="item">
            <p className="heading">
              Highest Level of Education<span className="asterik">*</span>
            </p>
            <Select
              {...register("highestLevelOfEducation", { required: true })}
              size="lg"
              placeholder="Select option"
              borderColor="#4299E1"
            >
              <option value="Grade12">Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors Degree">Bachelors Degree</option>
              <option value="Masters Degree">Masters Degree</option>
              <option value="Phd Degree">Phd Degree</option>
            </Select>
            {getErrorMessage(errors.highestLevelOfEducation)}
          </div>
          <div className="item">
            <p className="heading">
              Institute where you completed your highest level of education
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("instituteName", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.instituteName)}
          </div>
          <div className="item">
            <p className="heading">
              What did you study<span className="asterik">*</span>
            </p>
            <Input
              {...register("fieldOfStudy", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.fieldOfStudy)}
          </div>
          <div className="item">
            <p className="heading">
              Do you have any relevant work experience?
              <span className="asterik">*</span>
              <p className="heading">
                Write None if no work experience. Provide the following details
                if yes:
              </p>
              <p className="heading">1.Job Title </p>
              <p className="heading">2.Company Name </p>
              <p className="heading">2.Job duties </p>
              <p className="heading">
                Sample Answer: I worked as a Sales Manager at Effizient
                Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                managed sales operations, reaching out to leads, lead the
                outreach program, ensured meeting monthly targets.
              </p>
            </p>
            <Input
              {...register("experience", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.experience)}
          </div>
          <div className="item">
            <p className="heading">
              What institute did you get admitted to in Canada?
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("canadaInstiuteName", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.canadaInstiuteName)}
          </div>
          <div className="item">
            <p className="heading">
              What is your program of study in Canada?
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("canadaProgram", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.canadaProgram)}
          </div>
          <div className="item">
            <p className="heading">
              Which country are you applying from?
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("applyingFromCountry", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.applyingFromCountry)}
          </div>
          <div className="item">
            <p className="heading">
              What are your future goals? <span className="asterik">*</span>
            </p>
            <Input
              {...register("futureGoals", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.futureGoals)}
          </div>
          <div className="item">
            <p className="heading">
              English Scores - Listening <span className="asterik">*</span>
            </p>
            <Input
              {...register("englishListeningScore", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.englishListeningScore)}
          </div>
          <div className="item">
            <p className="heading">
              English Scores - Reading <span className="asterik">*</span>
            </p>
            <Input
              {...register("reading", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.englishReadingScore)}
          </div>
          <div className="item">
            <p className="heading">
              English Scores - Speaking <span className="asterik">*</span>
            </p>
            <Input
              {...register("englishSpeakingScore ", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.englishSpeakingScore)}
          </div>
          <div className="item">
            <p className="heading">
              English Scores - Writing <span className="asterik">*</span>
            </p>
            <Input
              {...register("englishWritingScore", { required: true })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.englishWritingScore)}
          </div>
          <div className="item">
            <p className="heading">
              Did you pay your first year tuition?
              <span className="asterik">*</span>
            </p>
            <Controller
              name="firstYearTuition"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="row">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            {getErrorMessage(errors.firstYearTuition)}
          </div>
          <div className="item">
            <p className="heading">
              How much tuition fee did you pay?
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("tuitionAmount", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.tuitionAmount)}
          </div>
          <div className="item">
            <p className="heading">
              Did you do a GIC? <span className="asterik">*</span>
            </p>

            <Controller
              name="doneGics"
              control={control}
              render={({ field: { onChange, value } }) => {
                console.log("val", value);
                return (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="row">
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="No">No</Radio>
                    </Stack>
                  </RadioGroup>
                );
              }}
            />

            {getErrorMessage(errors.doneGics)}
          </div>
          <div className="item">
            <p className="heading">
              How much did you pay towards GIC?
              <span className="asterik">*</span>
            </p>
            <Input
              {...register("gicPay", {
                required: true,
              })}
              size="lg"
              borderColor="#4299E1"
            />
            {getErrorMessage(errors.gicPay)}
          </div>
          <div>
            <Button type="submit" size="md" colorScheme="twitter">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
