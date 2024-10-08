import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import header_image from "../../assets/peak-point-pt-logo-landscape-min.png"

export default function PatinetData({ data }) {
  // Create styles
  // Define the styles
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    // logo: {
    //     width: 20, // Adjust the size of your logo
    //     height: 20,
    //     marginBottom: 10,
    //   },
    header: {
      fontSize: 14,
      marginBottom: 10,
      textAlign: "center",
    },
    fieldLabel: {
      fontWeight: "bold",
      fontSize: 10,
      marginBottom: 2,
      color : "#020617"

    },
    fieldValue: {
      fontSize: 9,
      marginBottom: 5,
      color : "#374151"
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
      width: "48%", // Adjust width for proper alignment
    },
    //   row: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     borderBottom: '1px solid #eee',
    //     marginBottom: 5,
    //   },
    //   column: {
    //     width: '50%',
    //     paddingRight: 10,
    //   },
  });

  return (
    <Document title={data.header.patientName}>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* <Image
            style={styles.logo}
            src={header_image}
          /> */}
          {/* Dummy logo path */}
          <Text>{data.header.clinic_name}</Text>
          <Text>{data.header.address}</Text>
          <Text>{data.header.contact}</Text>
        </View>

        {/* Date and DOB */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>
            NAME:{" "}
            <Text style={styles.fieldValue}>{data.header.patientName}</Text>
          </Text>
          <Text style={styles.fieldLabel}>
            DATE: <Text style={styles.fieldValue}>{data.header.date}</Text>
          </Text>
          <Text style={styles.fieldLabel}>
            DOB: <Text style={styles.fieldValue}>{data.header.dob}</Text>
          </Text>
        </View>

        {/* DX Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>DX:</Text>
          {data.patient_info.dx.map((dxItem, index) => (
            <Text key={index} style={styles.fieldValue}>
              {dxItem.name} - {dxItem.desc}
            </Text>
          ))}
        </View>

        {/* HX Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>HX:</Text>
          <Text style={styles.fieldValue}>{data.patient_info.hx}</Text>
        </View>

        {/* Allergies */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>ALLERGIES:</Text>
          <Text style={styles.fieldValue}>{data.patient_info.allergies}</Text>
        </View>

        {/* Medications */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>MEDICATIONS:</Text>
          <Text style={styles.fieldValue}>{data.patient_info.medications}</Text>
        </View>

        {/* PMH and PSH */}
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.leftColumn}>
              <Text style={styles.fieldLabel}>PMH:</Text>
              <Text style={styles.fieldValue}>{data.patient_info.pmh}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.fieldLabel}>PSH:</Text>
              <Text style={styles.fieldValue}>{data.patient_info.psh}</Text>
            </View>
          </View>
        </View>

        {/* Social Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>SOCIAL:</Text>
          <Text style={styles.fieldValue}>{data.patient_info.social}</Text>
        </View>

        {/* Test Results Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>TEST RESULTS:</Text>
          <Text style={styles.fieldValue}>
            {data.patient_info.test_results}
          </Text>
        </View>

        {/* Subjective Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>SUBJECTIVE:</Text>
          <Text style={styles.fieldValue}>{data.patient_info.subjective}</Text>
        </View>

        {/* Pain Scale Section */}
        <View style={styles.section}>
          <Text style={styles.painScaleLabel}>PAIN SCALE:</Text>
          <View style={styles.painScale}>
            <Text style={styles.scaleValue}>7/10</Text>
          </View>
        </View>

        {/* Observation Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>OBSERVATION:</Text>
          <Text style={styles.fieldValue}>
            Gait: {data.physical?.observation.gait}
          </Text>
          <Text style={styles.fieldValue}>
            Posture: {data.physical?.observation.posture}
          </Text>
        </View>

        {/* AROM / Active Movement */}
        <View style={styles.section}>
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
        </View>

        {/* PROM Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>PROM:</Text>
          <Text style={styles.fieldValue}>
            Lx spine: {data.physical?.prom.lx_spine}
          </Text>
          <Text style={styles.fieldValue}>
            Shoulder: {data.physical?.prom.shoulder}
          </Text>
        </View>

        {/* Joint Mobs Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>JOINT MOBS:</Text>
          <Text style={styles.fieldValue}>{data.physical?.joint_mobs}</Text>
        </View>

        {/* Strength Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>STRENGTH:</Text>
          <Text style={styles.fieldValue}>{data.physical?.strength}</Text>
        </View>

        {/* Special Test Section */}
        <View style={styles.section}>
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
        </View>

        {/* Palpation Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>PALPATION:</Text>
          <Text style={styles.fieldValue}>{data.physical?.palpation}</Text>
        </View>

        {/* Tone Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>TONE:</Text>
          <Text style={styles.fieldValue}>{data.physical?.tone}</Text>
        </View>
        {/* Coordination/Balance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COORDINATION / BALANCE</Text>
          <View style={styles.row}>
            <Text style={styles.fieldLabel}>Dynamic balance:</Text>
            <Text style={styles.fieldValue}>{data.coordination_balance}</Text>
          </View>
        </View>

        {/* Reflexes, Sensation, Skin, Girth */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>REFLEXES</Text>
          <Text style={styles.fieldValue}>{data.reflexes}</Text>

          <Text style={styles.sectionTitle}>SENSATION</Text>
          <Text style={styles.fieldValue}>{data.sensation}</Text>

          <Text style={styles.sectionTitle}>SKIN</Text>
          <Text style={styles.fieldValue}>{data.skin}</Text>

          <Text style={styles.sectionTitle}>GIRTH</Text>
          <Text style={styles.fieldValue}>{data.girth}</Text>
        </View>

        {/* Functional Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FUNCTIONAL STATUS</Text>
          <Text style={styles.fieldValue}>{data.functional_status.note}</Text>
          {data.functional_status.activities.map((activity, index) => (
            <Text key={index} style={styles.fieldValue}>
              - {activity}
            </Text>
          ))}
        </View>

        {/* Prior Functional Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PRIOR FUNCTIONAL STATUS</Text>
          <Text style={styles.fieldValue}>{data.prior_functional_status}</Text>
        </View>

        {/* Assessment */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ASSESSMENT</Text>
          <Text style={styles.fieldValue}>{data.assessment}</Text>
        </View>

        {/* Goals */}
        <View style={styles.section}>
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
        </View>

        {/* Plan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PLAN</Text>
          {data.plan.details.map((planDetail, index) => (
            <Text key={index} style={styles.fieldValue}>
              {planDetail}
            </Text>
          ))}
        </View>

        {/* Frequency of Treatment */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FREQUENCY OF TREATMENT</Text>
          <Text style={styles.fieldValue}>{data.frequency}</Text>
        </View>

        {/* Certification */}
        <View style={styles.section}>
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
        </View>
      </Page>
    </Document>
  );
}
