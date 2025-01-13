document.addEventListener("DOMContentLoaded", function () {
    // Add Education Section
    // Add Education Section
document.getElementById('add-education').addEventListener('click', function (e) {
    e.preventDefault();
    
    // Check if another education section is already added
    const eduSections = document.querySelectorAll('.edu');
    if (eduSections.length < 1) {  // Limit to 1 education form
        const eduSection = document.querySelector('.edu').cloneNode(true);
        eduSection.querySelector('.degree').value = '';
        eduSection.querySelector('.school').value = '';
        eduSection.querySelector('.year').value = '';
        document.getElementById('education-section').appendChild(eduSection);
        
        // Disable Add Education button
        document.getElementById('add-education').disabled = true;
    }
});


    // Remove Education Section
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('remove-entry')) {
            e.preventDefault();
            e.target.closest('.edu').remove();
        }
    });

    // Add Skills Section
    document.getElementById('add-skill').addEventListener('click', function (e) {
        e.preventDefault();
        const skillInput = document.createElement('input');
        skillInput.placeholder = "Skills";
        skillInput.type = 'text';
        skillInput.name = 'skills[]';
        document.getElementById('skills-section').appendChild(skillInput);
    });

    // Add Experience Section
    document.getElementById('add-experience').addEventListener('click', function (e) {
        e.preventDefault();
        
        // Check if another experience section is already added
        const expSections = document.querySelectorAll('.entry');
        if (expSections.length < 1) {  // Limit to 1 experience form
            const experienceSection = document.querySelector('.entry').cloneNode(true);
            experienceSection.querySelector('.job-title').value = '';
            experienceSection.querySelector('.company').value = '';
            experienceSection.querySelector('.duration').value = '';
            experienceSection.querySelector('.responsibilities').value = '';
            document.querySelector('.exp').appendChild(experienceSection);
            
            // Disable Add Experience button
            document.getElementById('add-experience').disabled = true;
        }
    });

    // Generate Resume Preview
    document.getElementById('resume-form').addEventListener('input', function () {
        let previewContent = `
            <h3>Personal Information</h3>
            <p>Name: ${document.getElementById('name').value}</p>
            <p>Email: ${document.getElementById('email').value}</p>
            <p>Phone: ${document.getElementById('phone').value}</p>
            <p>Address: ${document.getElementById('address').value}</p>
            <h3>Education</h3>
        `;

        const educationEntries = document.querySelectorAll('.edu');
        educationEntries.forEach(function (edu) {
            previewContent += `
                <p>Degree: ${edu.querySelector('.degree').value}</p>
                <p>School: ${edu.querySelector('.school').value}</p>
                <p>Year: ${edu.querySelector('.year').value}</p>
            `;
        });

        previewContent += `<h3>Skills</h3>`;
        const skills = document.querySelectorAll('[name="skills[]"]');
        skills.forEach(function (skill) {
            if (skill.value) {
                previewContent += `<p>${skill.value}</p>`;
            }
        });

        previewContent += `<h3>Experience</h3>`;
        const experienceEntries = document.querySelectorAll('.entry');
        experienceEntries.forEach(function (entry) {
            previewContent += `
                <p>Job Title: ${entry.querySelector('.job-title').value}</p>
                <p>Company: ${entry.querySelector('.company').value}</p>
                <p>Duration: ${entry.querySelector('.duration').value}</p>
                <p>Responsibilities: ${entry.querySelector('.responsibilities').value}</p>
            `;
        });

        document.getElementById('preview-content').innerHTML = previewContent;
    });

    // Download Resume as PDF
    // Function to generate and download PDF
document.getElementById('download-pdf').addEventListener('click', function (e) {
    e.preventDefault();

    // Get resume content (you can customize this based on your page layout)
    const resumeContent = document.getElementById('preview-content').innerHTML;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add the resume content as text to the PDF (you can customize this to fit your needs)
    doc.text(resumeContent, 10, 10);  // Positioning the content at x=10, y=10

    // Download the generated PDF
    doc.save('resume.pdf');
});

});
