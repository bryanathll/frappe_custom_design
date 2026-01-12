// // custom_listview.js - Modern Table Styling Only

// console.log('🎨 Custom ListView Style Initializing...');

// // Simple approach - just add custom classes to existing list view
// function applyModernStyle() {
//     // Find list view container
//     var $listContainer = $('.layout-main-section');
    
//     if ($listContainer.length) {
//         $listContainer.addClass('modern-list-view');
//         console.log('✅ Modern style classes applied');
        
//         // Add classes to result area
//         $('.frappe-list').addClass('modern-list-table');
//         $('.list-row-container').addClass('modern-row');
        
//         return true;
//     }
    
//     return false;
// }

// // Initialize when Frappe is ready
// function init() {
//     if (!window.frappe) {
//         setTimeout(init, 500);
//         return;
//     }
    
//     console.log('✅ Frappe ready, applying styles...');
    
//     // Apply on load
//     setTimeout(applyModernStyle, 1000);
    
//     // Re-apply on route change
//     if (frappe.router) {
//         frappe.router.on('change', function() {
//             setTimeout(applyModernStyle, 500);
//         });
//     }
    
//     // Re-apply when list refreshes
//     $(document).on('frappe.ui.ListView:render_complete', function() {
//         applyModernStyle();
//     });
// }

// // Start
// $(document).ready(function() {
//     init();
// });

// console.log('🎬 Custom ListView Style Loaded');