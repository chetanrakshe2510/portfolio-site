from PyPDF2 import PdfReader, PdfWriter

# 📂 List the PDFs in the order you want
pdf_files = [
    "Fine-Tuning_EEG_Channel_Utilization_for_Emotionally_Stimulated_Biometric_Authentication.pdf",
    "Autism spectrum disorder diagnosis using fractal and non-fractal-based functional connectivity analysis and machine learning methods.pdf",
    "Age- and Severity-Specific Deep Learning Models for Autism Spectrum Disorder Classification Using Functional Connectivity Measures.pdf",
    "Callophyllum oil as alternative fuel for diesel engine.pdf",
    "Diagnostic Classification of ASD Using Fractal Functional Connectivity of fMRI and Logistic Regression.pdf",
    "Diagnostic Classification of ASD Improves with Structural Connectivity of DTI and Logistic Regression.pdf",
    "Advancing_ASD_Diagnostic_Classification_with_Features_of_Continuous_Wavelet_Transform_of_fMRIand_Machine_Learning_Algorithms.pdf"

]

# 📂 Input folder and output file
input_folder = r"G:\Personal\Publications"
output_file = "merged_first_pages.pdf"

# Create a PDF writer object
pdf_writer = PdfWriter()

for file_name in pdf_files:
    file_path = f"{input_folder}/{file_name}"
    try:
        pdf_reader = PdfReader(file_path)
        if len(pdf_reader.pages) > 0:  # check if PDF has pages
            first_page = pdf_reader.pages[0]
            pdf_writer.add_page(first_page)
            print(f"✅ Added first page from {file_name}")
    except Exception as e:
        print(f"❌ Could not process {file_name}: {e}")

# Write merged PDF to file
with open(output_file, "wb") as out_file:
    pdf_writer.write(out_file)

print(f"\n🎉 Merged PDF created: {output_file}")
