import {Metadata} from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us Page",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-center my-8 text-4xl">About Us</h1>
      <div className="p-6 rounded-md border border-white-300 text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo a
          sapien hendrerit luctus. Fusce a libero eu sapien ultrices mattis. Integer nec mauris vel risus consequat
          sollicitudin. Proin luctus convallis mauris, eu tempor lectus dictum vitae. Donec viverra nisl a velit
          vehicula commodo. Sed vitae est arcu. Fusce non nunc vel leo laoreet vestibulum. Vestibulum pulvinar nulla a
          quam scelerisque tincidunt. Sed congue sapien sed pharetra dapibus.
        </p>
      </div>
    </>
  );
}
