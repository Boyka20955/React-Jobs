import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

// Add Job
const addJob = async (newJob) => {
  try {
    const res = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to add job: ${errorText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Error adding job:", err);
    throw err;
  }
};

// Delete Job
const deleteJob = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to delete job: ${errorText}`);
    }

    return true;
  } catch (err) {
    console.error("Error deleting job:", err);
    throw err;
  }
};

// Update Job
const updateJob = async (id, updatedJob) => {
  try {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to update job: ${errorText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Error updating job:", err);
    throw err;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route
        path="/edit-jobs/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
