class ApiCalls {
  constructor() {
    this.baseURL = "https://localhost:44315/api";
  }

  async fetchData(endpoint, options = {}, token) {
    const url = `${this.baseURL}/${endpoint}`;

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }

  async createData(endpoint, method, data, token) {
    const url = `${this.baseURL}/${endpoint}`;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const createdData = await response.json();
      return createdData;
    } catch (error) {
      console.error("Error creating/updating data:", error.message);
      throw error;
    }
  }

  async getClients() {
    return await this.fetchData("clients");
  }

  async getClientById(clientId) {
    return await this.fetchData(`clients/${clientId}`);
  }

  async createClient(clientData) {
    return await this.createData("clients", "POST", clientData);
  }
  async createClients(clientData) {
    return await this.createClients(
      "clients/create-multiple",
      "POST",
      clientData
    );
  }

  async updateClient(updatedClientData) {
    return await this.createData(`clients`, "PUT", updatedClientData);
  }

  async deleteClient(clientId) {
    return await this.fetchData(`clients/${clientId}`, { method: "DELETE" });
  }

  async getAuthenticaions() {
    return await this.fetchData("authentications");
  }

  async getAuthenticationById(authenticationId) {
    console.log(authenticationId);
    return await this.fetchData(`authentications/${authenticationId}`);
  }

  async createAuthentication(authenticationData) {
    return await this.createData("authentications", "POST", authenticationData);
  }

  async createAuthentications(authenticationData) {
    return await this.createData(
      "authentications/create-multiple",
      "POST",
      authenticationData
    );
  }

  async updateAuthentication(updatedAuthenticationData) {
    return await this.createData(
      `authentications`,
      "PUT",
      updatedAuthenticationData
    );
  }

  async deleteAuthentication(authenticationId) {
    return await this.fetchData(`authentications/${authenticationId}`, {
      method: "DELETE",
    });
  }

  async getAppointments() {
    return await this.fetchData("appointments");
  }

  async getVendors() {
    return await this.fetchData("vendors");
  }

  async getFinancialTransactions() {
    return await this.fetchData("financialtransactions");
  }

  // For Appointments
  async getAppointmentById(appointmentId) {
    return await this.fetchData(`appointments/${appointmentId}`);
  }

  async createAppointment(appointmentData) {
    return await this.createData("appointments", "POST", appointmentData);
  }

  async createAppointments(appointmentData) {
    return await this.createData(
      "appointments/create-multiple",
      "POST",
      appointmentData
    );
  }

  async updateAppointment(updatedAppointmentData) {
    return await this.createData(`appointments`, "PUT", updatedAppointmentData);
  }

  async deleteAppointment(appointmentId) {
    return await this.fetchData(`appointments/${appointmentId}`, {
      method: "DELETE",
    });
  }

  // For Vendors
  async getVendorById(vendorId) {
    return await this.fetchData(`vendors/${vendorId}`);
  }

  async createVendor(vendorData) {
    return await this.createData("vendors", "POST", vendorData);
  }

  async createVendors(vendorData) {
    return await this.createData("vendors/create-multiple", "POST", vendorData);
  }

  async updateVendor(updatedVendorData) {
    return await this.createData(`vendors`, "PUT", updatedVendorData);
  }

  async deleteVendor(vendorId) {
    return await this.fetchData(`vendors/${vendorId}`, { method: "DELETE" });
  }

  // For Financial Transactions
  async getFinancialTransactionById(transactionId) {
    return await this.fetchData(`financialtransactions/${transactionId}`);
  }

  async createFinancialTransaction(transactionData) {
    return await this.createData(
      "financialtransactions",
      "POST",
      transactionData
    );
  }

  async createFinancialTransactions(transactionData) {
    return await this.createData(
      "financialtransactions/create-multiple",
      "POST",
      transactionData
    );
  }

  async updateFinancialTransaction(updatedTransactionData) {
    return await this.createData(
      `financialtransactions`,
      "PUT",
      updatedTransactionData
    );
  }

  async deleteFinancialTransaction(transactionId) {
    return await this.fetchData(`financialtransactions/${transactionId}`, {
      method: "DELETE",
    });
  }

  async getAdmins() {
    return await this.fetchData("admins");
  }

  async getEmployeeRosters() {
    return await this.fetchData("employeerosters");
  }

  async getArchivedProjects() {
    return await this.fetchData("archivedprojects");
  }

  async getInProgressProjects() {
    return await this.fetchData("inprogressprojects");
  }

  // For Admins
  async getAdminById(adminId) {
    return await this.fetchData(`admins/${adminId}`);
  }

  async createAdmin(adminData) {
    return await this.createData("admins", "POST", adminData);
  }

  async createAdmins(adminData) {
    return await this.createData("admins/create-multiple", "POST", adminData);
  }

  async updateAdmin(updatedAdminData) {
    return await this.createData(`admins`, "PUT", updatedAdminData);
  }

  async deleteAdmin(adminId) {
    return await this.fetchData(`admins/${adminId}`, { method: "DELETE" });
  }

  // For Employee Rosters
  async getEmployeeRosterById(rosterId) {
    return await this.fetchData(`employeerosters/${rosterId}`);
  }

  async createEmployeeRoster(rosterData) {
    return await this.createData("employeerosters", "POST", rosterData);
  }

  async createEmployeeRosters(rosterData) {
    return await this.createData(
      "employeerosters/create-multiple",
      "POST",
      rosterData
    );
  }

  async updateEmployeeRoster(updatedRosterData) {
    return await this.createData(`employeerosters`, "PUT", updatedRosterData);
  }

  async deleteEmployeeRoster(rosterId) {
    return await this.fetchData(`employeerosters/${rosterId}`, {
      method: "DELETE",
    });
  }

  // For Archived Projects
  async getArchivedProjectById(projectId) {
    return await this.fetchData(`archivedprojects/${projectId}`);
  }

  async createArchivedProject(projectData) {
    return await this.createData("archivedprojects", "POST", projectData);
  }

  async createArchivedProjects(projectData) {
    return await this.createData(
      "archivedprojects/create-multiple",
      "POST",
      projectData
    );
  }

  async updateArchivedProject(updatedProjectData) {
    return await this.createData(`archivedprojects`, "PUT", updatedProjectData);
  }

  async deleteArchivedProject(projectId) {
    return await this.fetchData(`archivedprojects/${projectId}`, {
      method: "DELETE",
    });
  }

  // For In-Progress Projects
  async getInProgressProjectById(projectId) {
    return await this.fetchData(`inprogressprojects/${projectId}`);
  }

  async createInProgressProject(projectData) {
    return await this.createData("inprogressprojects", "POST", projectData);
  }

  async createInProgressProjects(projectData) {
    return await this.createData(
      "inprogressprojects/create-multiple",
      "POST",
      projectData
    );
  }

  async updateInProgressProject(updatedProjectData) {
    return await this.createData(
      `inprogressprojects`,
      "PUT",
      updatedProjectData
    );
  }

  async deleteInProgressProject(projectId) {
    return await this.fetchData(`inprogressprojects/${projectId}`, {
      method: "DELETE",
    });
  }

  async getReservations() {
    return await this.fetchData("reservations");
  }

  async getCatalogCategories() {
    return await this.fetchData("catalogcategories");
  }

  async getCatalogs() {
    return await this.fetchData("catalogs");
  }

  async getChatLists() {
    return await this.fetchData("chatlists");
  }

  // For Reservations
  async getReservationById(reservationId) {
    return await this.fetchData(`reservations/${reservationId}`);
  }

  async createReservation(reservationData) {
    return await this.createData("reservations", "POST", reservationData);
  }

  async createReservations(reservationData) {
    return await this.createData(
      "reservations/create-multiple",
      "POST",
      reservationData
    );
  }

  async updateReservation(updatedReservationData) {
    return await this.createData(`reservations`, "PUT", updatedReservationData);
  }

  async deleteReservation(reservationId) {
    return await this.fetchData(`reservations/${reservationId}`, {
      method: "DELETE",
    });
  }

  // For Catalog Categories
  async getCatalogCategoryById(categoryId) {
    return await this.fetchData(`catalogcategories/${categoryId}`);
  }

  async createCatalogCategory(categoryData) {
    return await this.createData("catalogcategories", "POST", categoryData);
  }

  async createCatalogCategories(categoryData) {
    return await this.createData(
      "catalogcategories/create-multiple",
      "POST",
      categoryData
    );
  }

  async updateCatalogCategory(updatedCategoryData) {
    return await this.createData(
      `catalogcategories`,
      "PUT",
      updatedCategoryData
    );
  }

  async deleteCatalogCategory(categoryId) {
    return await this.fetchData(`catalogcategories/${categoryId}`, {
      method: "DELETE",
    });
  }

  // For Catalogs
  async getCatalogById(catalogId) {
    return await this.fetchData(`catalogs/${catalogId}`);
  }

  async createCatalog(catalogData) {
    return await this.createData("catalogs", "POST", catalogData);
  }

  async createCatalogs(catalogData) {
    return await this.createData(
      "catalogs/create-multiple",
      "POST",
      catalogData
    );
  }

  async updateCatalog(updatedCatalogData) {
    return await this.createData(`catalogs`, "PUT", updatedCatalogData);
  }

  async deleteCatalog(catalogId) {
    return await this.fetchData(`catalogs/${catalogId}`, { method: "DELETE" });
  }

  // For Chat Lists
  async getChatListById(chatListId) {
    return await this.fetchData(`chatlists/${chatListId}`);
  }

  async createChatList(chatListData) {
    return await this.createData("chatlists", "POST", chatListData);
  }

  async createChatLists(chatListData) {
    return await this.createData(
      "chatlists/create-multiple",
      "POST",
      chatListData
    );
  }

  async updateChatList(updatedChatListData) {
    return await this.createData(`chatlists`, "PUT", updatedChatListData);
  }

  async deleteChatList(chatListId) {
    return await this.fetchData(`chatlists/${chatListId}`, {
      method: "DELETE",
    });
  }

  async getInstallmentTransactions() {
    return await this.fetchData("installmenttransactions");
  }

  async getMaterialInventories() {
    return await this.fetchData("materialinventories");
  }

  async getMaterialTransactions() {
    return await this.fetchData("materialtransactions");
  }

  async getMessages() {
    return await this.fetchData("messages");
  }

  async getNotifications() {
    return await this.fetchData("notifications");
  }
  // For Installment Transactions
  async getInstallmentTransactionById(transactionId) {
    return await this.fetchData(`installmenttransactions/${transactionId}`);
  }

  async createInstallmentTransaction(transactionData) {
    return await this.createData(
      "installmenttransactions",
      "POST",
      transactionData
    );
  }

  async createInstallmentTransactions(transactionData) {
    return await this.createData(
      "installmenttransactions/create-multiple",
      "POST",
      transactionData
    );
  }

  async updateInstallmentTransaction(updatedTransactionData) {
    return await this.createData(
      `installmenttransactions`,
      "PUT",
      updatedTransactionData
    );
  }

  async deleteInstallmentTransaction(transactionId) {
    return await this.fetchData(`installmenttransactions/${transactionId}`, {
      method: "DELETE",
    });
  }

  // For Material Inventories
  async getMaterialInventoryById(inventoryId) {
    return await this.fetchData(`materialinventories/${inventoryId}`);
  }

  async createMaterialInventory(inventoryData) {
    return await this.createData("materialinventories", "POST", inventoryData);
  }

  async createMaterialInventories(inventoryData) {
    return await this.createData(
      "materialinventories/create-multiple",
      "POST",
      inventoryData
    );
  }

  async updateMaterialInventory(updatedInventoryData) {
    return await this.createData(
      `materialinventories`,
      "PUT",
      updatedInventoryData
    );
  }

  async deleteMaterialInventory(inventoryId) {
    return await this.fetchData(`materialinventories/${inventoryId}`, {
      method: "DELETE",
    });
  }

  // For Material Transactions
  async getMaterialTransactionById(transactionId) {
    return await this.fetchData(`materialtransactions/${transactionId}`);
  }

  async createMaterialTransaction(transactionData) {
    return await this.createData(
      "materialtransactions",
      "POST",
      transactionData
    );
  }

  async createMaterialTransactions(transactionData) {
    return await this.createData(
      "materialtransactions/create-multiple",
      "POST",
      transactionData
    );
  }

  async updateMaterialTransaction(updatedTransactionData) {
    return await this.createData(
      `materialtransactions`,
      "PUT",
      updatedTransactionData
    );
  }

  async deleteMaterialTransaction(transactionId) {
    return await this.fetchData(`materialtransactions/${transactionId}`, {
      method: "DELETE",
    });
  }

  // For Messages
  async getMessageById(messageId) {
    return await this.fetchData(`messages/${messageId}`);
  }

  async createMessage(messageData) {
    return await this.createData("messages", "POST", messageData);
  }

  async createMessages(messageData) {
    return await this.createData(
      "messages/create-multiple",
      "POST",
      messageData
    );
  }

  async updateMessage(updatedMessageData) {
    return await this.createData(`messages`, "PUT", updatedMessageData);
  }

  async deleteMessage(messageId) {
    return await this.fetchData(`messages/${messageId}`, { method: "DELETE" });
  }

  // For Notifications
  async getNotificationById(notificationId) {
    return await this.fetchData(`notifications/${notificationId}`);
  }

  async createNotification(notificationData) {
    return await this.createData("notifications", "POST", notificationData);
  }

  async createNotifications(notificationData) {
    return await this.createData(
      "notifications/create-multiple",
      "POST",
      notificationData
    );
  }

  async updateNotification(updatedNotificationData) {
    return await this.createData(
      `notifications`,
      "PUT",
      updatedNotificationData
    );
  }

  async deleteNotification(notificationId) {
    return await this.fetchData(`notifications/${notificationId}`, {
      method: "DELETE",
    });
  }

  async getOrders() {
    return await this.fetchData("orders");
  }

  async getReservationTransactions() {
    return await this.fetchData("reservationtransactions");
  }

  async getSalaryTransactions() {
    return await this.fetchData("salarytransactions");
  }

  // For Orders
  async getOrderById(orderId) {
    return await this.fetchData(`orders/${orderId}`);
  }

  async createOrder(orderData) {
    return await this.createData("orders", "POST", orderData);
  }

  async createOrders(orderData) {
    return await this.createData("orders/create-multiple", "POST", orderData);
  }

  async updateOrder(updatedOrderData) {
    return await this.createData(`orders`, "PUT", updatedOrderData);
  }

  async deleteOrder(orderId) {
    return await this.fetchData(`orders/${orderId}`, { method: "DELETE" });
  }

  // For Reservation Transactions
  async getReservationTransactionById(transactionId) {
    return await this.fetchData(`reservationtransactions/${transactionId}`);
  }

  async createReservationTransaction(transactionData) {
    return await this.createData(
      "reservationtransactions",
      "POST",
      transactionData
    );
  }

  async createReservationTransactions(transactionData) {
    return await this.createData(
      "reservationtransactions/create-multiple",
      "POST",
      transactionData
    );
  }

  async updateReservationTransaction(updatedTransactionData) {
    return await this.createData(
      `reservationtransactions`,
      "PUT",
      updatedTransactionData
    );
  }

  async deleteReservationTransaction(transactionId) {
    return await this.fetchData(`reservationtransactions/${transactionId}`, {
      method: "DELETE",
    });
  }

  // For Salary Transactions
  async getSalaryTransactionById(transactionId) {
    return await this.fetchData(`salarytransactions/${transactionId}`);
  }

  async createSalaryTransaction(transactionData) {
    return await this.createData("salarytransactions", "POST", transactionData);
  }

  async createSalaryTransactions(transactionData) {
    return await this.createData(
      "salarytransactions/create-multiple",
      "POST",
      transactionData
    );
  }

  async updateSalaryTransaction(updatedTransactionData) {
    return await this.createData(
      `salarytransactions`,
      "PUT",
      updatedTransactionData
    );
  }

  async deleteSalaryTransaction(transactionId) {
    return await this.fetchData(`salarytransactions/${transactionId}`, {
      method: "DELETE",
    });
  }

  async getTokens(token) {
    return await this.fetchData("tokens", token);
  }

  async loginUser(username, password) {
    return await this.fetchData(`login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
  }

  async getUserByUsername(username) {
    return await this.fetchData(`authentications/users/${username}`);
  }

  async googleLogin(username) {
    return await this.fetchData(`googlelogin/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default ApiCalls;
