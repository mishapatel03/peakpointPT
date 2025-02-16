import React, { useEffect } from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

export default function PatientData({ data }) {
  const dxRows = [];
  for (let i = 0; i < data?.DX?.length; i += 2) {
    dxRows.push(data?.DX?.slice(i, i + 2));
  }

  const therapistSignature = data.therapistSignature || null;

  const styles = StyleSheet.create({
    signatureContainer: { marginTop: 20, textAlign: "center" },
    signatureImage: { width: 120, height: 50 },
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
      flex: 1,
      alignItems: "flex-start", // Align content to the left
      paddingHorizontal: 10,
    },
    cellAromText: {
      fontSize: 10,
      padding: 2,
    },
    cellAromTextValue: {
      textAlign: "left", // Align text to the left
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
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#000",
      paddingVertical: 5,
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
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      textDecoration: "underline",
      textAlign: "center"
    },
    columnsContainer: {
      marginLeft: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    column: {
      width: "48%"
    },
    bulletPoint: {
      marginBottom: 6,
      textAlign: "left",
      flexWrap: "wrap",
      maxWidth: "100%"
    },

    s_table: {
      width: "100%",
    },
    s_row: {
      flexDirection: "row",
    },
    s_cell: {
      borderRight: "1px solid black",
      padding: 2,
    },
    s_headerCell: {
      marginLeft: 5,
      fontSize: 10,
      fontWeight: "bold",
    },
    s_dateCell: {
      flexDirection: "row",
      alignItems: "center"
    },
    s_dateText: {
      marginLeft: 5,
      fontSize: 10,
      fontWeight: "bold",
      marginRight: 5,
    },
    s_dateLine: {
      borderBottom: "1px solid black",
      width: 50,
      marginHorizontal: 3,
    },
    s_signatureContainer: {
      height: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    s_signatureImage: {
      width: 100,
      height: 40,
    },
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

  const selectedPlans = data.plan || [];
  const midIndex = Math.ceil(selectedPlans.length / 2);
  const firstColumn = selectedPlans.slice(0, midIndex);
  const secondColumn = selectedPlans.slice(midIndex);

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  return (
    <Document title={data.patientName}>
      <Page style={styles.page}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text>{data.address?.value?.clinicName}</Text>
            <Text>{data.address?.value?.addressLine1}</Text>
            <Text>{data.address?.value?.addressLine2}</Text>
            <Text>Tel. {data.address?.value?.tel}</Text>
            <Text>Fax. {data.address?.value?.fax}</Text>
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
              <Text style={styles.cellText}>{data.testResults?.value}</Text>
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
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.painScale}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>OBSERVATION   Gait:</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.gait?.value || data.gait}</Text>
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
                      {field ? `${field[0]} ${field[1]}` : ""}
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
              <Text style={styles.cellText}>{data.strengthValues}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>PALPATION</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.palpationValues}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>TONE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.toneValue}</Text>
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

          <View style={styles.row}>
            <View style={styles.cellHeader}>
              <Text style={styles.headerText}>ASSESSMENT</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>{data.assessment}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <View style={styles.cellHeader}>
                <Text style={styles.headerText}>PLAN</Text>
              </View>
              {selectedPlans.length > 0 && (
                <View style={styles.columnsContainer}>

                  <View style={styles.column}>
                    {firstColumn.map((plan, index) => (
                      <Text key={index} style={[styles.bulletPoint, styles.cellText]}>
                        • {plan}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.column}>
                    {secondColumn.map((plan, index) => (
                      <Text key={index} style={[styles.bulletPoint, styles.cellText]}>
                        • {plan}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>

          <View style={styles.s_table}>
            {/* Header Row */}
            <View style={styles.s_row}>
              <View style={[styles.s_cell, { width: "50%" }]}>
                <Text style={styles.s_headerCell}>PHYSICIAN CERTIFICATION</Text>
              </View>
              <View style={[styles.cell, { width: "50%", borderRight: "none" }]}>
                <Text style={styles.s_headerCell}>THERAPIST'S SIGNATURE</Text>
              </View>
            </View>

            <View style={styles.s_row}>
              <View style={[styles.s_cell, { width: "50%" }]}>
                <View style={styles.s_dateCell}>
                  <Text style={styles.s_dateText}>DATE</Text>
                  <Text>{data.ptCertificate}</Text>
                </View>
              </View>

              <View style={[styles.s_cell, { width: "50%", borderRight: "none" }]}>
                <View style={styles.s_signatureContainer}>
                  {therapistSignature && (
                    <Image src={therapistSignature} style={styles.s_signatureImage} />
                  )}
                </View>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  );
}
