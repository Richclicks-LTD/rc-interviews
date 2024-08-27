import Perks from "./perks";

export default function Home() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="cont py-12">
          <h2 className="h2 text-center">Congratulations!</h2>
          <p className="mt-4">
            Welcome to the second coding part of the Richclicks interview, in
            this task we are gonna create a slightly more elaborate component to
            show the awesome perks in working at Richclicks!
          </p>
        </div>
      </section>
      <Perks />
      <section className="bg-secondary">
        <div className="cont py-12">
          <h2 className="h2 text-center">Thank you for your time!</h2>
          <p className="mt-4">
            I am taking a little extra space here to personally thank you for
            taking the time and effort to perform this task and to compliment
            you for passing the first round. I am looking forward to seeing your
            solutions and I hope you have fun with this task!
          </p>
        </div>
      </section>
    </main>
  );
}
