import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Hospital = {
    name : Text;
    location : Text;
    specialty : Text;
  };

  let hospitalData = Map.empty<Text, Hospital>();

  // Mock hospital data initialization
  public shared ({ caller }) func addHospital(name : Text, location : Text, specialty : Text) : async () {
    let hospital : Hospital = {
      name;
      location;
      specialty;
    };
    hospitalData.add(name, hospital);
  };

  // Hospital locator query
  public query ({ caller }) func findHospitalsByLocation(location : Text) : async [Hospital] {
    hospitalData.values().filter(
      func(hospital) {
        Text.equal(hospital.location, location);
      }
    ).toArray();
  };

  public query ({ caller }) func findHospitalsBySpecialty(specialty : Text) : async [Hospital] {
    hospitalData.values().filter(
      func(hospital) {
        Text.equal(hospital.specialty, specialty);
      }
    ).toArray();
  };

  public query ({ caller }) func findHospitalByName(name : Text) : async ?Hospital {
    hospitalData.get(name);
  };

  // Eligibility checker flowchart data type
  type Question = {
    text : Text;
    options : [Text];
    nextQuestions : [Question];
  };

  // Mock eligibility flowchart initialization
  let initialQuestion : Question = {
    text = "Are you a resident of India?";
    options = ["Yes", "No"];
    nextQuestions = [
      {
        text = "Is your family income less than INR 5 lakhs per annum?";
        options = ["Yes", "No"];
        nextQuestions = [];
      },
      {
        text = "You are not eligible for PM-JAY scheme.";
        options = [];
        nextQuestions = [];
      },
    ];
  };

  // Eligibility checker query
  public query ({ caller }) func getInitialQuestion() : async Question {
    initialQuestion;
  };
};
