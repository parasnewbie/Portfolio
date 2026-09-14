/**
 * Minimalist Personal Portfolio — Vanilla JavaScript
 * Functions:
 * 1. Dynamic Footer Year
 */

(function () {
  'use strict';

  // --- Dynamic Footer Year ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();
