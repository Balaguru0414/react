import { useLoaderData, useParams } from "react-router-dom";

const CareersDetails = () => {
  // const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
          maiores perspiciatis sed cum consequatur aliquid esse sint nobis
          adipisci, hic, fugit optio repudiandae, eius laboriosam consequuntur.
          Illum, beatae officiis.
        </p>
      </div>
    </div>
  );
};

export default CareersDetails;

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) throw Error("Could not find that career");

  return res.json();
};
