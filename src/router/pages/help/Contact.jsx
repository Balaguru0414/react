import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
          {data && data.error && <p>{data.error}</p>}
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submisson = {
    email: data.get("email"),
    message: data.get("message"),
  };
  // send the post request
  if (submisson.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }

  // redirect the user
  return redirect("/");
};
