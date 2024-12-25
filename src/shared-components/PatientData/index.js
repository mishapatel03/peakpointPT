import React, { useEffect } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function PatientData({ data }) {
  const dxRows = [];
  for (let i = 0; i < data?.DX?.length; i += 2) {
    dxRows.push(data?.DX?.slice(i, i + 2));
  }

  useEffect(() => {
    console.log(data);
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e5e7eb",
      flexDirection: "row",
      padding: 10,
      alignItems: "center",
    },
    headerSection: {
      alignItems: "center",
      fontSize: 10,
      flex: 1,
      paddingRight: 10,
    },
    detailsSection: {
      flex: 1,
      paddingLeft: 10,
    },
    divider: {
      width: 1,
      backgroundColor: "#000",
      height: "100%",
    },
    historySection: {
      borderBottomWidth: 0,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 1,
    },
    labelContainer: {
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      paddingBottom: 2,
    },
    page: {
      padding: 20,
    },
    header: {
      fontSize: 10,
      marginBottom: 10,
      textAlign: "center",
    },
    fieldLabel: {
      fontWeight: "bold",
      fontSize: 10,
      marginBottom: 2,
      color: "#020617",
    },
    headerFieldLabel: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 10,
      marginBottom: 4,
      color: "#020617",
    },
    fieldValue: {
      fontSize: 9,
      marginBottom: 5,
      color: "#374151",
    },
    nameField: {
      fontSize: 12,
      alignItems: "center",
    },
    section: {
      marginBottom: 10,
      borderBottom: "1px solid #eee",
      paddingBottom: 5,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftColumn: {
      width: "50%",
      paddingRight: 10,
    },
    rightColumn: {
      width: "50%",
    },
    subSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    fieldGroup: {
      width: "48%",
    },
    borderBottom: {
      borderBottom: "1px solid #eee",
    },
    tableHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 3,
    },
    painScale: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    painScaleLabel: {
      fontWeight: "bold",
      fontSize: 10,
    },
    scaleValue: {
      fontSize: 9,
    },
    bold: {
      fontWeight: "bold",
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: 10,
      marginBottom: 5,
      borderBottom: "1px solid #eee",
    },
    label: {
      fontWeight: "bold",
      fontSize: 10,
    },
    value: {
      fontSize: 9,
    },
    certificationRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    certificationColumn: {
      width: "48%",
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#000",
    },
    lastRow: {
      flexDirection: "row",
      borderColor: "#000",
    },
    cell: {
      flex: 1,
      borderColor: "#000",
      padding: 5,
      justifyContent: "center",
    },
    cellArom: {
      flex: 1, // Each cell will take an equal portion of the row's width
      alignItems: "center", // Center-align the text horizontally
      justifyContent: "flex-start", // Align text to the top
      paddingHorizontal: 10, // Add some padding to the left and right
    },
    cellAromText: {
      fontSize: 10,
      padding: 2,
    },
    cellAromTextValue: {
      textAlign: "center", // Center-align values
      fontSize: 10,
      padding: 2,
    },
    cellHeader: {
      fontSize: 10,
      minWidth: 90,
      padding: 5,
      justifyContent: "center",
      //borderRightWidth: 1
    },
    cellAromRow: {
      flexDirection: "row", // Arrange items in a row
      justifyContent: "space-between", // Distribute space evenly across the row
      alignItems: "center", // Vertically align items in the center
      borderBottomWidth: 1,
      borderColor: "#000",
    },
    cellText: {
      textAlign: "left",
      fontSize: 10,
    },

    aromtable: {
      width: "100%",
      marginTop: 10,
    },
    aromrow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#000",
      paddingVertical: 5,
    },
    aromcell: {
      flex: 1,
      paddingHorizontal: 5,
    },
    aromheader: {
      fontWeight: "bold",
      fontSize: 10,
    },
    aromtext: {
      fontSize: 9,
    },
    observationHeader: {
      marginLeft: 80
    }
  });

  const test = {
    Ankle: {},
    "Cervical Spine": {},
    " Elbow": {},
    LB: {
      "Extension Reduced": "red. 45% > pn/stiff",
      "Flexion Reduced": "red. 65% > pn/stiff",
      "Rotation Reduced": "red. 65% > pn/stiff",
    },
    Shoulder: {
      Abduction: 6,
      Extension: 8,
      "External Rot": 5,
      Flexion: 8,
      "Internal Rot": "9",
    },
    Toes: { "Aduction Reduced": "56" },
  };

  // Process data to extract the fields for each object
  const filledData = Object.entries(data.arom)
    .filter(([key, value]) => Object.keys(value).length > 0) // Non-empty objects
    .map(([key, value]) => {
      const fields = Object.entries(value); // Get all fields
      return {
        category: key,
        fields: fields, // Store all fields
      };
    });

  // Find the maximum number of fields any object has
  const maxFields = Math.max(...filledData.map((item) => item.fields.length));
  // Extract keys with objects containing fields
  const keysWithFields = Object.keys(data.arom).filter(
    (key) => typeof data.arom[key] === "object" && Object.keys(data.arom[key]).length > 0
  );

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  return (
    <Document title={data.patientName}>
      <Page style={styles.page}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text>{data.address?.value}</Text>
            {/* <Text>{data.header.address}</Text>
            <Text>{data.header.contact}</Text> */}
          </View>

          <View style={styles.divider} />
          <View style={styles.detailsSection}>
            <Text style={styles.headerFieldLabel}>
              NAME <Text style={styles.nameField}>{data.patientName}</Text>
            </Text>
            <Text style={styles.headerFieldLabel}>
              DOB <Text style={styles.fieldValue}>{data.patientDOB}</Text>
            </Text>
            <Text style={styles.headerFieldLabel}>
              DATE{" "}
              <Text style={styles.fieldValue}>
                {data.currentDate || getTodayDate()}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.historySection}>
          <View>
            {dxRows.map((row, index) => (
              <View key={index} style={styles.row}>
                {index === 0 ? (
                  <View style={styles.cellHeader}>
                    <Text style={styles.headerText}>DX</Text>
                  </View>
                ) : (
                  <View style={styles.cellHeader} />
                )}
                {row.map((item, cellIndex) => (
                  <View key={cellIndex} style={styles.cell}>
                    <Text style={styles.cellText}>{item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>HX</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.patientHistoryValue}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>ALLERGIES:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.allergies}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>MEDICATIONS:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.medications}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PMH:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>
                {data.pmh?.length > 0
                  ? data.pmh.length === 1
                    ? data.pmh[0]
                    : `${data.pmh.slice(0, -1).join(", ")} and ${data.pmh[data.pmh.length - 1]
                    }`
                  : ""}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PSH:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.psh}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>SOCIAL:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.social}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>TEST RESULTS:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.testResults}</Text>
            </View>
          </View>

          {/* Subjective Section */}

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>SUBJECTIVE:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.subjective}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PAIN SCALE:</Text>
            </View>
            {/* <View style={styles.cell}>
              <Text style={styles.cellText}>{data.subjective}</Text>
            </View> */}
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>OBSERVATION   Gait:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.gait?.value}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.observationHeader}>Posture : </Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.posture}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>AROM / ACTIVE MVMT :</Text>
            </View>
          </View>
          <View style={styles.cellAromRow}>
            {keysWithFields.map((key, index) => (
              <View style={styles.cellArom} key={index}>
                <Text style={styles.cellAromText}>{key}</Text>
              </View>
            ))}
          </View>

          {Array.from({ length: maxFields }).map((_, rowIndex) => (
            <View style={styles.cellAromRow} key={rowIndex}>
              {filledData.map((item, index) => {
                const field = item.fields[rowIndex];
                return (
                  <View style={styles.cellArom} key={index}>
                    <Text style={styles.cellAromTextValue}>
                      {field ? `${field[0]}: ${field[1]}` : ""}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>JOINT MOBS</Text>
            </View>
            <View style={styles.cell}>
              {data.jointMobsValues.length > 0 && (
                <Text style={styles.cellText}>
                  {data.jointMobsValues.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text>{item}</Text>
                      {index < data.jointMobsValues.length - 1 && (
                        <Text style={{ fontWeight: "bold" }}> AND </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </View>
          </View>


          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>STRENGTH</Text>
            </View>
            <View style={styles.cell}>
              {data.strengthValues.length > 0 && (
                <Text style={styles.cellText}>
                  {data.strengthValues.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text>{item}</Text>
                      {index < data.strengthValues.length - 1 && (
                        <Text style={{ fontWeight: "bold" }}> AND </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PALPATION</Text>
            </View>
            <View style={styles.cell}>
              {data.palpationValues.length > 0 && (
                <Text style={styles.cellText}>
                  {data.palpationValues.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text>{item}</Text>
                      {index < data.palpationValues.length - 1 && (
                        <Text style={{ fontWeight: "bold" }}> AND </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>TONE</Text>
            </View>
            <View style={styles.cell}>
              {data.palpationValues.length > 0 && (
                <Text style={styles.cellText}>
                  {data.palpationValues.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text>{item}</Text>
                      {index < data.palpationValues.length - 1 && (
                        <Text style={{ fontWeight: "bold" }}> AND </Text>
                      )}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>COORDINATION / BALANCE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.coordinate}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>REFLEXES</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Intact</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>SENSATION</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.sensation}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>SKIN</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.skin}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PULSES</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.pulse}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>GIRTH</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.girth}</Text>
            </View>
          </View>


        </View>

        {/* Pain Scale Section */}
        {/* <View style={styles.section}>
          <Text style={styles.painScaleLabel}>PAIN SCALE:</Text>
          <View style={styles.painScale}>
            <Text style={styles.scaleValue}>7/10</Text>
          </View>
        </View> */}

        {/* Observation Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>OBSERVATION:</Text>
          <Text style={styles.fieldValue}>
            Gait: {data.physical?.observation.gait}
          </Text>
          <Text style={styles.fieldValue}>
            Posture: {data.physical?.observation.posture}
          </Text>
        </View> */}

        {/* AROM / Active Movement */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>AROM / ACTIVE MVMT:</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.fieldValue}>
              Flex: {data.physical?.arom.flex}
            </Text>
            <Text style={styles.fieldValue}>
              Ext Rot: {data.physical?.arom.ext_rot}
            </Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.fieldValue}>
              Ext: {data.physical?.arom.ext}
            </Text>
            <Text style={styles.fieldValue}>SB: {data.physical?.arom.sb}</Text>
          </View>
        </View> */}

        {/* PROM Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>PROM:</Text>
          <Text style={styles.fieldValue}>
            Lx spine: {data.physical?.prom.lx_spine}
          </Text>
          <Text style={styles.fieldValue}>
            Shoulder: {data.physical?.prom.shoulder}
          </Text>
        </View> */}

        {/* Joint Mobs Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>JOINT MOBS:</Text>
          <Text style={styles.fieldValue}>{data.physical?.joint_mobs}</Text>
        </View> */}

        {/* Strength Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>STRENGTH:</Text>
          <Text style={styles.fieldValue}>{data.physical?.strength}</Text>
        </View> */}

        {/* Special Test Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>SPECIAL TEST:</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.fieldValue}>
              SLR: {data.physical?.special_test.slr}
            </Text>
            <Text style={styles.fieldValue}>
              McKenzie: {data.physical?.special_test.mckenzie}
            </Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.fieldValue}>
              Apprehension: {data.physical?.special_test.apprehension}
            </Text>
            <Text style={styles.fieldValue}>
              VA: {data.physical?.special_test.va}
            </Text>
          </View>
        </View> */}

        {/* Palpation Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>PALPATION:</Text>
          <Text style={styles.fieldValue}>{data.physical?.palpation}</Text>
        </View> */}

        {/* Tone Section */}
        {/* <View style={styles.section}>
          <Text style={styles.fieldLabel}>TONE:</Text>
          <Text style={styles.fieldValue}>{data.physical?.tone}</Text>
        </View> */}
        {/* Coordination/Balance Section */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>COORDINATION / BALANCE</Text>
          <View style={styles.row}>
            <Text style={styles.fieldLabel}>Dynamic balance:</Text>
            <Text style={styles.fieldValue}>{data.coordination_balance}</Text>
          </View>
        </View> */}

        {/* Reflexes, Sensation, Skin, Girth */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>REFLEXES</Text>
          <Text style={styles.fieldValue}>{data.reflexes}</Text>

          <Text style={styles.sectionTitle}>SENSATION</Text>
          <Text style={styles.fieldValue}>{data.sensation}</Text>

          <Text style={styles.sectionTitle}>SKIN</Text>
          <Text style={styles.fieldValue}>{data.skin}</Text>

          <Text style={styles.sectionTitle}>GIRTH</Text>
          <Text style={styles.fieldValue}>{data.girth}</Text>
        </View> */}

        {/* Functional Status */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>FUNCTIONAL STATUS</Text>
          <Text style={styles.fieldValue}>{data.functional_status.note}</Text>
          {data.functional_status.activities.map((activity, index) => (
            <Text key={index} style={styles.fieldValue}>
              - {activity}
            </Text>
          ))}
        </View> */}

        {/* Prior Functional Status */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>PRIOR FUNCTIONAL STATUS</Text>
          <Text style={styles.fieldValue}>{data.prior_functional_status}</Text>
        </View> */}

        {/* Assessment */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>ASSESSMENT</Text>
          <Text style={styles.fieldValue}>{data.assessment}</Text>
        </View> */}

        {/* Goals */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>GOALS</Text>
          <Text style={styles.fieldLabel}>Short Term (6 Weeks)</Text>
          {data.goals.short_term.map((goal, index) => (
            <Text key={index} style={styles.fieldValue}>
              {goal}
            </Text>
          ))}
          <Text style={styles.fieldLabel}>Long Term (12 Weeks)</Text>
          {data.goals.long_term.map((goal, index) => (
            <Text key={index} style={styles.fieldValue}>
              {goal}
            </Text>
          ))}
        </View> */}

        {/* Plan */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>PLAN</Text>
          {data.plan.details.map((planDetail, index) => (
            <Text key={index} style={styles.fieldValue}>
              {planDetail}
            </Text>
          ))}
        </View> */}

        {/* Frequency of Treatment */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>FREQUENCY OF TREATMENT</Text>
          <Text style={styles.fieldValue}>{data.frequency}</Text>
        </View> */}

        {/* Certification */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>CERTIFICATION</Text>
          <Text style={styles.fieldLabel}>Patient Certification:</Text>
          <Text style={styles.fieldValue}>
            {data.certification.patient_certification}
          </Text>
          <Text style={styles.fieldLabel}>Physician Certification:</Text>
          <Text style={styles.fieldValue}>
            {data.certification.physician_certification}
          </Text>
          <View style={styles.certificationRow}>
            <View style={styles.certificationColumn}>
              <Text style={styles.fieldLabel}>Therapist Signature:</Text>
              <Text style={styles.fieldValue}>
                {data.certification.therapist_signature}
              </Text>
            </View>
            <View style={styles.certificationColumn}>
              <Text style={styles.fieldLabel}>Date:</Text>
              <Text style={styles.fieldValue}>{data.certification.date}</Text>
            </View>
          </View>
        </View> */}
      </Page>
    </Document>
  );
}
