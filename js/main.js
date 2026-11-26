/**
 * ==============================================================================
 * MAIN INTERACTIVITY - INDIKA WIJAYAGUNARATHNA PORTFOLIO
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State
  let currentFilter = 'all';
  let activeArtworksList = [...ARTWORKS];
  let currentModalIndex = 0;

  // DOM Elements
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const artworkDialog = document.getElementById('artwork-dialog');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');
  const dialogPrevBtn = document.getElementById('dialog-prev-btn');
  const dialogNextBtn = document.getElementById('dialog-next-btn');
  const dialogInquireBtn = document.getElementById('dialog-inquire-btn');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const commissionForm = document.getElementById('commission-form');
  const formStatus = document.getElementById('form-status');
  const whatsappSubmitBtn = document.getElementById('whatsapp-submit-btn');

  // Featured Artwork Elements (Hero)
  const heroFeaturedImg = document.getElementById('hero-featured-img');
  const heroFeaturedTitle = document.getElementById('hero-featured-title');
  const heroFeaturedMedium = document.getElementById('hero-featured-medium');
  const heroFeaturedSize = document.getElementById('hero-featured-size');
  const heroFeaturedYear = document.getElementById('hero-featured-year');
  const heroFeaturedBtn = document.getElementById('hero-featured-btn');
  const heroFeaturedCard = document.getElementById('hero-featured-card');

  // ============================================================================
  // 2. HERO FEATURED ARTWORK INITIALIZATION
  // ============================================================================
  function initFeaturedArtwork() {
    const featuredPiece = ARTWORKS.find(item => item.featured) || ARTWORKS[0];
    if (!featuredPiece) return;

    if (heroFeaturedImg) {
      heroFeaturedImg.src = featuredPiece.image;
      heroFeaturedImg.alt = featuredPiece.alt;
    }
    if (heroFeaturedTitle) heroFeaturedTitle.textContent = featuredPiece.title;
    if (heroFeaturedMedium) heroFeaturedMedium.textContent = featuredPiece.medium;
    if (heroFeaturedSize) heroFeaturedSize.textContent = featuredPiece.size;
    if (heroFeaturedYear) heroFeaturedYear.textContent = featuredPiece.year;

    const openFeaturedModal = () => {
      const idx = activeArtworksList.findIndex(item => item.id === featuredPiece.id);
      openModal(idx !== -1 ? idx : 0);
    };

    if (heroFeaturedBtn) heroFeaturedBtn.addEventListener('click', openFeaturedModal);
    if (heroFeaturedCard) {
      const imgWrap = heroFeaturedCard.querySelector('.featured-image-wrapper');
      if (imgWrap) imgWrap.addEventListener('click', openFeaturedModal);
    }
  }

  // ============================================================================
  // 3. GALLERY RENDERING & FILTERING
  // ============================================================================
  function updateFilterCounts() {
    const counts = {
      all: ARTWORKS.length,
      portraits: ARTWORKS.filter(a => a.category === 'portraits').length,
      landscapes: ARTWORKS.filter(a => a.category === 'landscapes').length,
      watercolors: ARTWORKS.filter(a => a.category === 'watercolors').length
    };

    filterButtons.forEach(btn => {
      const category = btn.getAttribute('data-filter');
      const countSpan = btn.querySelector('.filter-count');
      if (countSpan && counts[category] !== undefined) {
        countSpan.textContent = `(${counts[category]})`;
      }
    });
  }

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    activeArtworksList = currentFilter === 'all' 
      ? [...ARTWORKS] 
      : ARTWORKS.filter(item => item.category === currentFilter);

    if (activeArtworksList.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-light);">
          <p>No artworks found in this category.</p>
        </div>
      `;
      return;
    }

    activeArtworksList.forEach((artwork, index) => {
      const card = document.createElement('article');
      card.className = 'artwork-card';
      card.setAttribute('data-id', artwork.id);
      card.setAttribute('data-category', artwork.category);

      const isLandscapeRatio = artwork.category === 'landscapes';
      const isPlaceholderSize = artwork.size.includes('[') || artwork.size.includes('placeholder');
      const isPlaceholderYear = artwork.year.includes('[') || artwork.year.includes('placeholder');

      const sizeDisplay = isPlaceholderSize 
        ? `<span class="placeholder-badge">${artwork.size}</span>`
        : `<span class="meta-value">${artwork.size}</span>`;

      const yearDisplay = isPlaceholderYear
        ? `<span class="placeholder-badge">${artwork.year}</span>`
        : `<span class="meta-value">${artwork.year}</span>`;

      card.innerHTML = `
        <div class="artwork-frame ${isLandscapeRatio ? 'landscape-ratio' : ''}" tabindex="0" role="button" aria-label="View artwork details for ${artwork.title}">
          <img 
            src="${artwork.image}" 
            alt="${artwork.alt}" 
            class="artwork-image" 
            loading="lazy" 
            width="600" 
            height="750" 
          />
          <div class="artwork-overlay">
            <span class="overlay-inspect-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              View Artwork
            </span>
          </div>
        </div>
        <div class="artwork-caption">
          <span class="artwork-category-tag tag-${artwork.category}">${artwork.categoryLabel}</span>
          <h3 class="artwork-title">${artwork.title}</h3>
          
          <div class="artwork-meta-list">
            <div class="artwork-meta-item">
              <span class="meta-label">Medium:</span>
              <span class="meta-value">${artwork.medium}</span>
            </div>
            <div class="artwork-meta-item">
              <span class="meta-label">Size:</span>
              ${sizeDisplay}
            </div>
            <div class="artwork-meta-item">
              <span class="meta-label">Year:</span>
              ${yearDisplay}
            </div>
          </div>

          <div class="artwork-card-actions">
            <button class="card-view-details" type="button" aria-label="Inspect ${artwork.title}">
              <span>Details & Dimensions</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <a href="#commissions" class="card-inquire-link" data-inquire-title="${encodeURIComponent(artwork.title)}">
              Inquire
            </a>
          </div>
        </div>
      `;

      // Event listeners for opening modal
      const frame = card.querySelector('.artwork-frame');
      const detailsBtn = card.querySelector('.card-view-details');
      const inquireLink = card.querySelector('.card-inquire-link');

      const triggerModal = () => openModal(index);
      frame.addEventListener('click', triggerModal);
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerModal();
        }
      });
      detailsBtn.addEventListener('click', triggerModal);

      inquireLink.addEventListener('click', (e) => {
        e.preventDefault();
        prefillContactForm(artwork);
      });

      galleryGrid.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      currentFilter = button.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  // ============================================================================
  // 4. LIGHTBOX / MODAL FUNCTIONALITY (<dialog>)
  // ============================================================================
  function openModal(index) {
    if (!artworkDialog || index < 0 || index >= activeArtworksList.length) return;
    currentModalIndex = index;
    updateModalContent();

    // Show native dialog modal
    if (typeof artworkDialog.showModal === 'function') {
      artworkDialog.showModal();
    } else {
      artworkDialog.setAttribute('open', '');
    }

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!artworkDialog) return;
    if (typeof artworkDialog.close === 'function') {
      artworkDialog.close();
    } else {
      artworkDialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  function updateModalContent() {
    const artwork = activeArtworksList[currentModalIndex];
    if (!artwork) return;

    const modalImg = document.getElementById('dialog-image');
    const modalCategory = document.getElementById('dialog-category');
    const modalTitle = document.getElementById('dialog-title');
    const modalMedium = document.getElementById('dialog-medium');
    const modalSize = document.getElementById('dialog-size');
    const modalYear = document.getElementById('dialog-year');
    const modalDesc = document.getElementById('dialog-description');

    if (modalImg) {
      modalImg.src = artwork.image;
      modalImg.alt = artwork.alt;
    }
    if (modalCategory) {
      modalCategory.textContent = artwork.categoryLabel;
      modalCategory.className = `dialog-category tag-${artwork.category}`;
    }
    if (modalTitle) modalTitle.textContent = artwork.title;
    if (modalMedium) modalMedium.textContent = artwork.medium;
    if (modalSize) modalSize.textContent = artwork.size;
    if (modalYear) modalYear.textContent = artwork.year;
    if (modalDesc) modalDesc.textContent = artwork.description;
  }

  function prevArtwork() {
    if (activeArtworksList.length === 0) return;
    currentModalIndex = (currentModalIndex - 1 + activeArtworksList.length) % activeArtworksList.length;
    updateModalContent();
  }

  function nextArtwork() {
    if (activeArtworksList.length === 0) return;
    currentModalIndex = (currentModalIndex + 1) % activeArtworksList.length;
    updateModalContent();
  }

  // Modal Controls Event Listeners
  if (dialogCloseBtn) dialogCloseBtn.addEventListener('click', closeModal);
  if (dialogPrevBtn) dialogPrevBtn.addEventListener('click', prevArtwork);
  if (dialogNextBtn) dialogNextBtn.addEventListener('click', nextArtwork);

  // Close when clicking dialog backdrop
  if (artworkDialog) {
    artworkDialog.addEventListener('click', (e) => {
      const rect = artworkDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });

    artworkDialog.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  // Keyboard navigation within modal
  window.addEventListener('keydown', (e) => {
    if (!artworkDialog || !artworkDialog.open) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevArtwork();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextArtwork();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Modal Inquire Button
  if (dialogInquireBtn) {
    dialogInquireBtn.addEventListener('click', () => {
      const artwork = activeArtworksList[currentModalIndex];
      closeModal();
      if (artwork) {
        prefillContactForm(artwork);
      }
    });
  }

  // ============================================================================
  // 5. CONTACT & COMMISSION INQUIRY FORM PREFILL & ACTIONS
  // ============================================================================
  function prefillContactForm(artwork) {
    const contactSection = document.getElementById('commissions');
    const formType = document.getElementById('inquiry-type');
    const formMessage = document.getElementById('inquiry-message');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (formType) {
      if (artwork.category === 'portraits') formType.value = 'portrait';
      else if (artwork.category === 'landscapes') formType.value = 'landscape';
      else if (artwork.category === 'watercolors') formType.value = 'watercolor';
      else formType.value = 'artwork-inquiry';
    }

    if (formMessage) {
      formMessage.value = `Hello Indika,\n\nI am interested in inquiring about your artwork "${artwork.title}" (${artwork.medium}, ${artwork.size}).\n\nPlease let me know if this piece is available or if a custom commissioned work with a similar subject can be arranged.\n\nThank you.`;
      formMessage.focus();
    }
  }

  // Handle Form Submission (Email mailto fallback + User Confirmation)
  if (commissionForm) {
    commissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiry-name').value.trim();
      const email = document.getElementById('inquiry-email').value.trim();
      const phone = document.getElementById('inquiry-phone').value.trim();
      const type = document.getElementById('inquiry-type').value;
      const size = document.getElementById('inquiry-size').value;
      const message = document.getElementById('inquiry-message').value.trim();

      const subject = encodeURIComponent(`Art Inquiry from ${name} - ${type}`);
      const bodyContent = 
`Art Inquiry / Commission Request:
----------------------------------
Sender Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || 'Not provided'}
Inquiry Type: ${type}
Desired Size: ${size || 'Not specified'}

Message / Details:
${message}
----------------------------------
Sent from Indika Wijayagunarathna Portfolio Website`;

      const mailtoUrl = `mailto:indikawijaya74@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

      // Show friendly confirmation status
      if (formStatus) {
        formStatus.textContent = "Thank you! Opening your email client to send your inquiry directly to Indika Wijayagunarathna (indikawijaya74@gmail.com)...";
        formStatus.className = "form-status success";
        formStatus.style.display = "block";
      }

      // Launch email client
      window.location.href = mailtoUrl;
    });
  }

  // WhatsApp Inquiry Button
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', () => {
      const name = document.getElementById('inquiry-name')?.value.trim() || 'A Visitor';
      const type = document.getElementById('inquiry-type')?.value || 'General Inquiry';
      const size = document.getElementById('inquiry-size')?.value || '';
      const message = document.getElementById('inquiry-message')?.value.trim() || 'Hello Indika, I would like to inquire about your artwork.';

      const waText = 
`Hello Indika, my name is ${name}.
I am interested in: ${type} ${size ? `(${size})` : ''}.

${message}`;

      const waUrl = `https://wa.me/94712930790?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ============================================================================
  // 6. MOBILE NAVIGATION MENU
  // ============================================================================
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('is-open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================================================
  // 7. INITIALIZE
  // ============================================================================
  initFeaturedArtwork();
  updateFilterCounts();
  renderGallery();
});
