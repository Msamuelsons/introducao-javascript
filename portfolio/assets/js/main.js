function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href=`tel:${profileData.phone}`;

    const mail = document.getElementById('profile.email');
    mail.innerText = profileData.email;
    mail.href=`mailto:${profileData.email}`;

}

function updateProfileSoftSkills(profileData) {
    const softskills = document.getElementById('profile.skills.softSkills');
    
   softskills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

function updateProfileHardSkills(profileData) {
    const hardskills = document.getElementById('profile.skills.softSkills');
    
   hardskills.innerHTML = profileData.skills.hardSkills.map((skill) => `
    <li>
        <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
   </li>`).join('')
}

(async function() {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateProfileSoftSkills(profileData);
    updateProfileHardSkills(profileData);
})();